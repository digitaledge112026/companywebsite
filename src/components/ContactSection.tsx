"use client";

import { useState } from "react";
import InternationalPhoneInput from "./InternationalPhoneInput";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-[#0E1E30] border border-neutral-300 dark:border-white/10 text-base sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#55D98A] transition-colors";
const labelClass =
  "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  service: "Meta Ads",
  message: "",
  company: "",
};
type FormData = typeof emptyForm;

// Free form-to-email service (web3forms.com). When set, it's used instead of the SMTP route.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const WHATSAPP_NUMBER = "918248316794";

async function sendEnquiry(f: FormData) {
  if (WEB3FORMS_KEY) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New enquiry: ${f.name} (${f.service})`,
        from_name: "Digital Edge Website",
        botcheck: f.company,
        name: f.name,
        phone: f.phone,
        email: f.email || undefined,
        interested_in: f.service,
        message: f.message || "—",
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success)
      throw new Error(data.message || "Email failed");
    return;
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(f),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Email failed");
}

function whatsappLink(f: FormData) {
  const details = [
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    f.email ? `Email: ${f.email}` : "",
    `Interested in: ${f.service}`,
    f.message ? `Message: ${f.message}` : "",
  ].filter(Boolean);
  const text = ["Hi Digital Edge, I'd like to enquire.", "", ...details].join(
    "\n",
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(emptyForm);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPhoneValid) {
      setErrorMessage("Please enter a valid phone number for your selected country.");
      return;
    }

    setSending(true);
    setFailed(false);
    setErrorMessage("");

    try {
      await sendEnquiry(formData);
      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Contact form:", err);
      const msg = err instanceof Error ? err.message : "Email failed";
      setErrorMessage(msg);
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#FAF9F5] dark:bg-[#0D1927] text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold text-[#059669] dark:text-[#55D98A] mb-3">
            Contact
          </p>
          <h2 className="font-clash text-4xl sm:text-5xl font-bold tracking-tight leading-[1]">
            Let&apos;s talk about your business.
          </h2>
          <p className="mt-5 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            Tell us what you sell and who you want to reach. We&apos;ll suggest
            where to start.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div
            id="contact-form"
            style={{ scrollMarginTop: 96 }}
            className="rounded-xl p-6 sm:p-8 bg-white dark:bg-[#13273D] border border-black/[0.08] dark:border-white/10"
          >
            {submitted ? (
              <div className="py-10 text-center">
                <h3 className="font-clash text-2xl font-bold">
                  Thanks, {formData.name}.
                </h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm">
                  We&apos;ve received your enquiry and will get back to you
                  soon.
                </p>
                <button
                  onClick={() => {
                    setFormData(emptyForm);
                    setIsPhoneValid(false);
                    setSubmitted(false);
                  }}
                  className="mt-5 text-sm text-[#059669] dark:text-[#55D98A] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="c-name">
                      Name *
                    </label>
                    <input
                      id="c-name"
                      required
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="c-phone">
                      Phone / WhatsApp *
                    </label>
                    <InternationalPhoneInput
                      id="c-phone"
                      required
                      value={formData.phone}
                      onChange={(fullNumber, isValid) => {
                        setFormData((prev) => ({ ...prev, phone: fullNumber }));
                        setIsPhoneValid(isValid);
                        if (errorMessage) setErrorMessage("");
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="c-email">
                      Email{" "}
                      <span className="text-neutral-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="c-service">
                      Interested in
                    </label>
                    <select
                      id="c-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option className="bg-white dark:bg-[#0D1927] text-neutral-900 dark:text-white">Meta Ads</option>
                      <option className="bg-white dark:bg-[#0D1927] text-neutral-900 dark:text-white">Google Ads</option>
                      <option className="bg-white dark:bg-[#0D1927] text-neutral-900 dark:text-white">Social Media Management</option>
                      <option className="bg-white dark:bg-[#0D1927] text-neutral-900 dark:text-white">SEO</option>
                      <option className="bg-white dark:bg-[#0D1927] text-neutral-900 dark:text-white">Google Business Profile</option>
                      <option className="bg-white dark:bg-[#0D1927] text-neutral-900 dark:text-white">Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="c-msg">
                    Message
                  </label>
                  <textarea
                    id="c-msg"
                    rows={4}
                    value={formData.message}
                    placeholder="A few lines about your business"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Hidden spam trap */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* Inline error feedback if validation or API fails */}
                {errorMessage && !failed && (
                  <p className="text-sm text-rose-500 font-medium">
                    {errorMessage}
                  </p>
                )}

                {failed && (
                  <div
                    role="alert"
                    className="rounded-lg border border-[#55D98A]/40 bg-[#55D98A]/10 p-4 text-sm"
                  >
                    <p className="text-neutral-800 dark:text-neutral-200">
                      We couldn&apos;t send that by email right now. Send it on
                      WhatsApp instead — your details are already filled in.
                    </p>
                    <a
                      href={whatsappLink(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSubmitted(true)}
                      className="mt-3 inline-flex items-center px-4 py-2 rounded-lg font-semibold text-[#0D1927] bg-[#55D98A] hover:bg-[#42C274] transition-colors"
                    >
                      Send on WhatsApp
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending || !isPhoneValid}
                  className="w-full py-3.5 rounded-lg font-semibold text-[#0D1927] bg-[#55D98A] hover:bg-[#42C274] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
