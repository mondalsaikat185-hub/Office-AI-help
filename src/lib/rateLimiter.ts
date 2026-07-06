interface RateLimitConfig {
  rpm: number;           // Requests per minute (e.g., 10 for free tier)
  safetyMargin: number;  // Keep 1-2 slots free as buffer (e.g., 2)
  backoffBase: number;   // Base delay in ms for exponential backoff (e.g., 2000)
  maxBackoff: number;    // Max backoff delay in ms (e.g., 60000)
}

// Model-specific RPM defaults
const MODEL_RPM_MAP: Record<string, number> = {
  'gemini-3.5-flash':       10,
  'gemini-3.1-flash-lite':  15,
  'gemini-2.5-flash':       10,   // Free tier default
  'gemini-2.5-pro':         5,
  'gemini-2.5-flash-lite':  15,
  'default':                10,
};

class RateLimiter {
  private timestamps: Map<string, number[]> = new Map(); // keyId → sorted timestamps
  private backoffCount: Map<string, number> = new Map();  // keyId → consecutive 429 count
  private config: RateLimitConfig;

  constructor(config?: Partial<RateLimitConfig>) {
    this.config = {
      rpm: config?.rpm ?? 10,
      safetyMargin: config?.safetyMargin ?? 2,
      backoffBase: config?.backoffBase ?? 2000,
      maxBackoff: config?.maxBackoff ?? 60000,
    };
  }

  /** Set RPM based on selected model */
  setModelRPM(modelId: string): void {
    this.config.rpm = MODEL_RPM_MAP[modelId] ?? MODEL_RPM_MAP['default'];
  }

  /** Set custom RPM (user can override in Settings) */
  setCustomRPM(rpm: number): void {
    this.config.rpm = Math.max(1, rpm);
  }

  /** Get current RPM limit */
  getRPM(): number {
    return this.config.rpm;
  }

  /** Wait until a rate limit slot is available */
  async waitForSlot(keyId: string = 'default'): Promise<void> {
    const now = Date.now();
    const windowMs = 60_000; // 1 minute window
    const effectiveRpm = this.config.rpm - this.config.safetyMargin;

    // Get timestamps for this key, prune old ones
    let stamps = this.timestamps.get(keyId) ?? [];
    stamps = stamps.filter(t => now - t < windowMs);
    this.timestamps.set(keyId, stamps);

    if (stamps.length < effectiveRpm) {
      // Slot available — no wait needed
      return;
    }

    // Calculate when the oldest request in the window will expire
    const oldestInWindow = stamps[0];
    const waitMs = (oldestInWindow + windowMs) - now + 100; // +100ms safety buffer

    if (waitMs > 0) {
      console.log(`[RateLimiter] Waiting ${Math.ceil(waitMs/1000)}s for RPM slot (${stamps.length}/${this.config.rpm} used)`);
      await this.sleep(waitMs);
    }
  }

  /** Record that a request was made */
  recordRequest(keyId: string = 'default'): void {
    const stamps = this.timestamps.get(keyId) ?? [];
    stamps.push(Date.now());
    this.timestamps.set(keyId, stamps);
    // Reset backoff on success
    this.backoffCount.set(keyId, 0);
  }

  /** Handle a 429 error — apply exponential backoff */
  async handleRateLimit(keyId: string = 'default'): Promise<void> {
    const count = (this.backoffCount.get(keyId) ?? 0) + 1;
    this.backoffCount.set(keyId, count);
    const delay = Math.min(
      this.config.backoffBase * Math.pow(2, count - 1),
      this.config.maxBackoff
    );
    console.warn(`[RateLimiter] 429 received. Backoff #${count}: waiting ${delay/1000}s`);
    await this.sleep(delay);
  }

  /** Get estimated wait time in seconds (for UI display) */
  getEstimatedWait(keyId: string = 'default'): number {
    const now = Date.now();
    const stamps = (this.timestamps.get(keyId) ?? []).filter(t => now - t < 60_000);
    const effectiveRpm = this.config.rpm - this.config.safetyMargin;
    if (stamps.length < effectiveRpm) return 0;
    const oldestInWindow = stamps[0];
    return Math.max(0, Math.ceil(((oldestInWindow + 60_000) - now) / 1000));
  }

  /** Calculate delay between N sequential calls to fit within RPM */
  getDelayBetweenCalls(totalCalls: number): number {
    const effectiveRpm = this.config.rpm - this.config.safetyMargin;
    if (totalCalls <= effectiveRpm) return 500; // minimal delay if all fit in one window
    return Math.ceil(60_000 / effectiveRpm) + 200; // spread evenly + buffer
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const rateLimiter = new RateLimiter();
