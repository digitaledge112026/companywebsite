"use client";

import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  className = "",
  size = "md",
}: BrandLogoProps) {
  const sizeMap = {
    sm: "h-7 sm:h-8",
    md: "h-8 sm:h-9 md:h-10",
    lg: "h-10 sm:h-12",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group cursor-pointer transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="Digital Edge - Digital Marketing Agency"
    >
      <div className="flex items-center">
        {/* Light Mode: Official Black & Mint Green Lockup on Transparent Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-transparent-light.png"
          alt="Digital Edge - Digital Marketing Agency"
          className={`${sizeMap[size]} w-auto object-contain block dark:hidden`}
          loading="eager"
        />

        {/* Dark Mode: Official White & Mint Green Lockup on Transparent Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-transparent-dark.png"
          alt="Digital Edge - Digital Marketing Agency"
          className={`${sizeMap[size]} w-auto object-contain hidden dark:block`}
          loading="eager"
        />
      </div>
    </Link>
  );
}
