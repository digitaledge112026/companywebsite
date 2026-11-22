import type { MouseEvent } from "react";

export const CONTACT_FORM_HREF = "/#contact-form";

/**
 * Smooth-scrolls to the contact form and focuses the first field on desktop.
 * If the form isn't on the current page, the link's normal navigation runs instead.
 */
export function goToContactForm(e: MouseEvent) {
  const form = document.getElementById("contact-form");
  if (!form) return;
  e.preventDefault();
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "#contact-form");
  
  // Only auto-focus on devices with a physical mouse/pointer
  // Avoids popping up mobile keyboards or zooming the mobile viewport
  if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
    setTimeout(() => document.getElementById("c-name")?.focus({ preventScroll: true }), 600);
  }
}
