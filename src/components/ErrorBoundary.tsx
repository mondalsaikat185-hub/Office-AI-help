import React from 'react';

interface State { hasError: boolean; message: string; }

/** Catches any runtime crash in the UI tree and shows a reload screen instead of a white page. */
export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(err: unknown): State {
    return { hasError: true, message: err instanceof Error ? err.message : String(err) };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error('[OfficeAI] UI crash:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0A0A0A', color: '#fff', padding: 24, textAlign: 'center', fontFamily: 'monospace' }}>
          <h1 style={{ color: '#EF4444', fontSize: 20, marginBottom: 12, letterSpacing: 2 }}>SOMETHING WENT WRONG</h1>
          <p style={{ color: '#999', fontSize: 12, maxWidth: 480, marginBottom: 8 }}>{this.state.message}</p>
          <p style={{ color: '#666', fontSize: 11, maxWidth: 480, marginBottom: 20 }}>আপনার ডেটা নিরাপদ আছে — রিলোড করলেই ফিরে আসবে।</p>
          <button onClick={() => window.location.reload()} style={{ background: '#22C55E', color: '#000', border: 0, padding: '10px 24px', fontWeight: 700, letterSpacing: 2, cursor: 'pointer' }}>
            RELOAD APP
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
