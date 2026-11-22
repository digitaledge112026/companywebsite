import type { MouseEvent } from "react";

export const CONTACT_FORM_HREF = "/#contact-form";

/**
 * Smooth-scrolls to the contact form and focuses the first field.
 * If the form isn't on the current page, the link's normal navigation runs instead.
 */
export function goToContactForm(e: MouseEvent) {
  const form = document.getElementById("contact-form");
  if (!form) return;
  e.preventDefault();
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "#contact-form");
  setTimeout(() => document.getElementById("c-name")?.focus({ preventScroll: true }), 600);
}
