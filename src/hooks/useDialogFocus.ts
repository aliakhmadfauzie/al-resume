import { useEffect, useRef } from 'react';

/** Keyboard focus trap and focus restoration for modal dialogs. */
export function useDialogFocus(isOpen: boolean, onClose: () => void) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const items = () => Array.from(dialog.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'
    )).filter(el => el.getClientRects().length > 0);
    (items()[0] ?? dialog).focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onCloseRef.current(); return; }
      if (e.key !== 'Tab') return;
      const focusable = items();
      if (!focusable.length) { e.preventDefault(); dialog.focus(); return; }
      if (e.shiftKey && (document.activeElement === focusable[0] || !dialog.contains(document.activeElement))) {
        e.preventDefault(); focusable[focusable.length - 1].focus();
      } else if (!e.shiftKey && (document.activeElement === focusable[focusable.length - 1] || !dialog.contains(document.activeElement))) {
        e.preventDefault(); focusable[0].focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [isOpen]);
  return dialogRef;
}
