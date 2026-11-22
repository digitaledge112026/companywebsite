"use client";

import Link from "next/link";
import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { CONTACT_FORM_HREF, goToContactForm } from "./goToContactForm";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/grow.withdigitaledge/",
  facebook: "https://www.facebook.com/share/19pqQLjnMz/",
  // TODO: replace with the LinkedIn page link when available (temporarily points to Instagram)
  linkedin: "https://www.instagram.com/grow.withdigitaledge/",
};

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-[18px] h-[18px]",
};

const InstagramIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg {...svgProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg {...svgProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: LinkedinIcon },
  {
    label: "WhatsApp",
    href: "https://wa.me/918248316794",
    Icon: () => <MessageCircle className="w-[18px] h-[18px]" />,
  },
];

const services = [
  "Meta Ads",
  "Google Ads",
  "Social Media Management",
  "SEO",
  "Google Business Profile",
];

const company = [
  { href: "/#about", label: "About" },
  { href: "/#process", label: "How we work" },
  { href: "/#sectors", label: "Industries" },
  { href: CONTACT_FORM_HREF, label: "Contact" },
];

const headingClass =
  "text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500 mb-5";
const linkClass =
  "text-neutral-700 dark:text-neutral-300 hover:text-[#059669] dark:hover:text-[#55D98A] transition-colors";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-100 dark:bg-[#09121C] border-t border-black/[0.08] dark:border-white/[0.08] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand + socials */}
          <div className="col-span-2 lg:col-span-4">
            <BrandLogo size="lg" />
            {/* <p className="mt-5 max-w-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Digital marketing agency in Tamil Nadu.
            </p> */}

            <div className="mt-7 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-[#55D98A] hover:border-[#55D98A] hover:text-[#0D1927] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className={headingClass}>Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/#services" className={linkClass}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className={headingClass}>Company</p>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={
                      l.href === CONTACT_FORM_HREF ? goToContactForm : undefined
                    }
                    className={linkClass}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <p className={headingClass}>Get in touch</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918248316794"
                  className={`${linkClass} inline-flex items-center gap-2.5`}
                >
                  <Phone className="w-4 h-4 text-[#059669] dark:text-[#55D98A]" />
                  +91 824 831 6794
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@growwithdigitaledge.com"
                  className={`${linkClass} inline-flex items-center gap-2.5`}
                >
                  <Mail className="w-4 h-4 text-[#059669] dark:text-[#55D98A]" />
                  contact@growwithdigitaledge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 py-6 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Digital Edge Marketing.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Back to top
            <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
