import React, { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

let openDialogs = 0;
let previousOverflow = '';

interface DialogProps {
  children: React.ReactNode;
  onClose: () => void;
  labelledBy?: string;
  label?: string;
  className?: string;
  id?: string;
}

/** Native top-layer dialogs contain focus and make the background inert. */
export function Dialog({ children, onClose, labelledBy, label, className = '', id }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useLayoutEffect(() => {
    const dialog = ref.current!;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (openDialogs++ === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    dialog.showModal();
    return () => {
      dialog.close();
      if (--openDialogs === 0) document.body.style.overflow = previousOverflow;
      const menu = document.getElementById('nav-btn-mobile-menu');
      const fallback = menu?.getClientRects().length ? menu : document.getElementById('main-content');
      const target = opener?.isConnected && opener !== document.body ? opener : fallback;
      if (target && !target.closest('[inert]')) target.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog ref={ref} id={id} tabIndex={-1} aria-labelledby={labelledBy} aria-label={label} aria-modal="true"
      className={`portfolio-dialog ${className}`}
      onCancel={(event) => { event.preventDefault(); event.stopPropagation(); closeRef.current(); }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;
        event.stopPropagation();
        const dialog = event.currentTarget as HTMLDialogElement;
        const controls = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'))
          .filter(element => !element.matches(':disabled, [hidden], input[type="hidden"]') && element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!first) { event.preventDefault(); dialog.focus(); }
        else if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog)) {
          event.preventDefault(); first.focus();
        }
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeRef.current();
      }}>
      {children}
    </dialog>, document.body,
  );
}
