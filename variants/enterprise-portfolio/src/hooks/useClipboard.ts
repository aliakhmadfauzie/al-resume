import { useState, useCallback } from 'react';

// ============================================================
// Types
// ============================================================
type CopyStatus = 'idle' | 'success' | 'error';

export interface UseClipboardReturn {
  /** Copies text to the clipboard */
  copy: (text: string) => Promise<void>;
  /** Current status of the copy operation */
  status: CopyStatus;
  /** Error object if copy failed */
  error: Error | null;
  /** Resets status back to idle */
  reset: () => void;
}

// ============================================================
// Hook
// ============================================================
export const useClipboard = (): UseClipboardReturn => {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('success');
      setError(null);
    } catch (err) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Failed to copy to clipboard';
      setError(new Error(message));
    }
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  return { copy, status, error, reset };
};
