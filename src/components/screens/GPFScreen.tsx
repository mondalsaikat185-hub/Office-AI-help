import React, { useEffect, useRef } from 'react';
import { useStore } from '../../lib/store';

export default function GPFScreen() {
    const { workspaces, activeWorkspaceId, apiKeys, selectedModel, theme } = useStore();
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const sendSystemState = () => {
        const ws = workspaces.find(w => w.id === activeWorkspaceId);
        if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage({
                type: 'SET_SYSTEM_STATE',
                payload: {
                    letterhead: ws?.letterhead || null,
                    apiKeys: apiKeys || [],
                    selectedModel: selectedModel || 'gemini-1.5-flash',
                    theme: theme || 'dark'
                }
            }, '*');
        }
    };

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data && event.data.type === 'IFRAME_READY') {
                sendSystemState();
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [workspaces, activeWorkspaceId, apiKeys, selectedModel, theme]);

    // Push updates if workspace, key registries, model config, or theme settings update dynamically
    useEffect(() => {
        sendSystemState();
    }, [workspaces, activeWorkspaceId, apiKeys, selectedModel, theme]);

    return (
        <div className="w-full h-[calc(100vh-80px)]">
            <iframe 
                ref={iframeRef}
                src="/gpf/index.html" 
                className="w-full h-full border-0" 
                title="GPF Withdrawal Tool"
            />
        </div>
    );
}
