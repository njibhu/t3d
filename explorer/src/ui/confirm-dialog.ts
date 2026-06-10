export interface ConfirmDialogOptions {
  kicker?: string;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

/**
 * Show a small modal confirmation dialog and resolve to the user's choice. Confirming
 * (button, Enter), cancelling (button, Esc, backdrop click) resolve `true`/`false`.
 */
export function showConfirmDialog(options: ConfirmDialogOptions): Promise<boolean> {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const dialog = document.createElement("div");
    dialog.className = "modal-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");

    if (options.kicker) {
      const kicker = document.createElement("span");
      kicker.className = "hud-kicker";
      kicker.textContent = options.kicker;
      dialog.appendChild(kicker);
    }

    const title = document.createElement("strong");
    title.className = "modal-title";
    title.textContent = options.title;
    dialog.appendChild(title);

    const message = document.createElement("p");
    message.className = "modal-message";
    message.textContent = options.message;
    dialog.appendChild(message);

    const actions = document.createElement("div");
    actions.className = "modal-actions";

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "ghost-button";
    cancelBtn.textContent = options.cancelLabel ?? "Cancel";

    const confirmBtn = document.createElement("button");
    confirmBtn.type = "button";
    confirmBtn.className = "primary-button";
    confirmBtn.textContent = options.confirmLabel ?? "Confirm";

    actions.append(cancelBtn, confirmBtn);
    dialog.appendChild(actions);
    overlay.appendChild(dialog);

    let settled = false;
    const close = (result: boolean): void => {
      if (settled) return;
      settled = true;
      window.removeEventListener("keydown", onKeyDown);
      overlay.remove();
      resolve(result);
    };
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") close(false);
      else if (event.key === "Enter") close(true);
    };

    cancelBtn.addEventListener("click", () => close(false));
    confirmBtn.addEventListener("click", () => close(true));
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close(false);
    });
    window.addEventListener("keydown", onKeyDown);

    document.body.appendChild(overlay);
    confirmBtn.focus();
  });
}
