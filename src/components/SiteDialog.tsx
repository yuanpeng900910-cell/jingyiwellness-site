"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

export function SiteDialog({ titleId, onClose, children, className = "", closeLabel = "关闭窗口" }: {
  titleId: string; onClose: () => void; children: ReactNode; className?: string; closeLabel?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    (element?.querySelector<HTMLElement>("[data-initial-focus]") ?? closeButton.current)?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);
  return <dialog ref={dialog} className={`jy-dialog jy-site-dialog ${className}`} aria-labelledby={titleId} onClose={onClose}
    onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
    <button ref={closeButton} type="button" className="jy-dialog__close" aria-label={closeLabel} onClick={() => dialog.current?.close()}><X size={22} /></button>
    {children}
  </dialog>;
}
