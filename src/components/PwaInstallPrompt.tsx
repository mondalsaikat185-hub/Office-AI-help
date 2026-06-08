import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Update UI notify the user they can install the PWA
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Also check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-[#1C1C1E]/95 backdrop-blur-md border border-[#3A3A3C] shadow-2xl rounded-2xl p-4 pr-12 text-white relative max-w-sm flex flex-col gap-3">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div>
          <h3 className="font-semibold text-sm">Install App</h3>
          <p className="text-xs text-white/70 mt-1">Install this app on your device for quick access from your home screen or desktop.</p>
        </div>
        <button 
          onClick={handleInstallClick}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors self-start"
        >
          Install Shortcut
        </button>
      </div>
    </div>
  );
}
