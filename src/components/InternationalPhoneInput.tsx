"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ChevronDown, Check, AlertCircle } from "lucide-react";

export interface CountryInfo {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  format: string;
  minLength: number;
  maxLength: number;
  pattern: RegExp;
  hint: string;
}

export const COUNTRIES: CountryInfo[] = [
  {
    code: "IN",
    name: "India",
    dialCode: "+91",
    flag: "🇮🇳",
    format: "98765 43210",
    minLength: 10,
    maxLength: 10,
    pattern: /^[6-9]\d{9}$/,
    hint: "Enter 10-digit mobile number (starts with 6, 7, 8, or 9)",
  },
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    flag: "🇺🇸",
    format: "(555) 123-4567",
    minLength: 10,
    maxLength: 10,
    pattern: /^[2-9]\d{9}$/,
    hint: "Enter 10-digit US phone number",
  },
  {
    code: "GB",
    name: "United Kingdom",
    dialCode: "+44",
    flag: "🇬🇧",
    format: "7911 123456",
    minLength: 10,
    maxLength: 10,
    pattern: /^[1-9]\d{9}$/,
    hint: "Enter 10-digit UK phone number",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    dialCode: "+971",
    flag: "🇦🇪",
    format: "50 123 4567",
    minLength: 9,
    maxLength: 9,
    pattern: /^5\d{8}$/,
    hint: "Enter 9-digit UAE mobile (starts with 5)",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    dialCode: "+966",
    flag: "🇸🇦",
    format: "50 123 4567",
    minLength: 9,
    maxLength: 9,
    pattern: /^5\d{8}$/,
    hint: "Enter 9-digit Saudi mobile (starts with 5)",
  },
  {
    code: "SG",
    name: "Singapore",
    dialCode: "+65",
    flag: "🇸🇬",
    format: "8123 4567",
    minLength: 8,
    maxLength: 8,
    pattern: /^[89]\d{7}$/,
    hint: "Enter 8-digit Singapore number (starts with 8 or 9)",
  },
  {
    code: "AU",
    name: "Australia",
    dialCode: "+61",
    flag: "🇦🇺",
    format: "412 345 678",
    minLength: 9,
    maxLength: 9,
    pattern: /^4\d{8}$/,
    hint: "Enter 9-digit Australian mobile (starts with 4)",
  },
  {
    code: "CA",
    name: "Canada",
    dialCode: "+1",
    flag: "🇨🇦",
    format: "(555) 123-4567",
    minLength: 10,
    maxLength: 10,
    pattern: /^[2-9]\d{9}$/,
    hint: "Enter 10-digit Canadian phone number",
  },
  {
    code: "QA",
    name: "Qatar",
    dialCode: "+974",
    flag: "🇶🇦",
    format: "3312 3456",
    minLength: 8,
    maxLength: 8,
    pattern: /^[3567]\d{7}$/,
    hint: "Enter 8-digit Qatar phone number",
  },
  {
    code: "KW",
    name: "Kuwait",
    dialCode: "+965",
    flag: "🇰🇼",
    format: "5123 4567",
    minLength: 8,
    maxLength: 8,
    pattern: /^[569]\d{7}$/,
    hint: "Enter 8-digit Kuwait phone number",
  },
  {
    code: "OM",
    name: "Oman",
    dialCode: "+968",
    flag: "🇴🇲",
    format: "7123 4567",
    minLength: 8,
    maxLength: 8,
    pattern: /^[79]\d{7}$/,
    hint: "Enter 8-digit Oman phone number",
  },
  {
    code: "BH",
    name: "Bahrain",
    dialCode: "+973",
    flag: "🇧🇭",
    format: "3612 3456",
    minLength: 8,
    maxLength: 8,
    pattern: /^[36]\d{7}$/,
    hint: "Enter 8-digit Bahrain phone number",
  },
  {
    code: "MY",
    name: "Malaysia",
    dialCode: "+60",
    flag: "🇲🇾",
    format: "12 345 6789",
    minLength: 9,
    maxLength: 10,
    pattern: /^1\d{8,9}$/,
    hint: "Enter 9 to 10-digit Malaysian mobile",
  },
  {
    code: "DE",
    name: "Germany",
    dialCode: "+49",
    flag: "🇩🇪",
    format: "151 23456789",
    minLength: 10,
    maxLength: 11,
    pattern: /^\d{10,11}$/,
    hint: "Enter 10 to 11-digit German phone number",
  },
  {
    code: "FR",
    name: "France",
    dialCode: "+33",
    flag: "🇫🇷",
    format: "6 12 34 56 78",
    minLength: 9,
    maxLength: 9,
    pattern: /^[67]\d{8}$/,
    hint: "Enter 9-digit French mobile (starts with 6 or 7)",
  },
  {
    code: "ZA",
    name: "South Africa",
    dialCode: "+27",
    flag: "🇿🇦",
    format: "71 234 5678",
    minLength: 9,
    maxLength: 9,
    pattern: /^[6-8]\d{8}$/,
    hint: "Enter 9-digit South African mobile",
  },
  {
    code: "NZ",
    name: "New Zealand",
    dialCode: "+64",
    flag: "🇳🇿",
    format: "21 123 4567",
    minLength: 8,
    maxLength: 9,
    pattern: /^2\d{7,8}$/,
    hint: "Enter 8 to 9-digit NZ mobile",
  },
  {
    code: "IE",
    name: "Ireland",
    dialCode: "+353",
    flag: "🇮🇪",
    format: "83 123 4567",
    minLength: 9,
    maxLength: 9,
    pattern: /^8\d{8}$/,
    hint: "Enter 9-digit Irish mobile",
  },
  {
    code: "OTHER",
    name: "International (Other)",
    dialCode: "+",
    flag: "🌐",
    format: "1234567890",
    minLength: 7,
    maxLength: 15,
    pattern: /^\d{7,15}$/,
    hint: "Enter full phone number with country code (7-15 digits)",
  },
];

interface InternationalPhoneInputProps {
  value: string; // e.g. "+91 98765 43210" or raw
  onChange: (fullNumber: string, isValid: boolean) => void;
  required?: boolean;
  id?: string;
  className?: string;
}

export default function InternationalPhoneInput({
  value,
  onChange,
  required = true,
  id = "c-phone",
  className = "",
}: InternationalPhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo>(COUNTRIES[0]); // Default India +91
  const [rawDigits, setRawDigits] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [touched, setTouched] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Initialize or parse external value if provided
  useEffect(() => {
    if (!value) return;

    // Check if value starts with a known dial code
    const matched = COUNTRIES.find(
      (c) => c.dialCode !== "+" && value.startsWith(c.dialCode)
    );

    if (matched) {
      setSelectedCountry(matched);
      const digitsOnly = value.slice(matched.dialCode.length).replace(/\D/g, "");
      setRawDigits(digitsOnly);
    } else {
      // Just take digits
      const digitsOnly = value.replace(/\D/g, "");
      setRawDigits(digitsOnly);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Validation status
  const validation = useMemo(() => {
    if (!rawDigits) {
      return { isValid: false, message: required ? "Phone number is required" : "" };
    }

    if (rawDigits.length < selectedCountry.minLength) {
      return {
        isValid: false,
        message: `Too short. ${selectedCountry.hint}`,
      };
    }

    if (rawDigits.length > selectedCountry.maxLength) {
      return {
        isValid: false,
        message: `Too long. Expected ${selectedCountry.maxLength} digits`,
      };
    }

    if (!selectedCountry.pattern.test(rawDigits)) {
      return {
        isValid: false,
        message: selectedCountry.hint,
      };
    }

    return { isValid: true, message: "" };
  }, [rawDigits, selectedCountry, required]);

  // Handle typed input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    let val = e.target.value;

    // If user pasted something starting with +, check for auto-detecting country
    if (val.startsWith("+")) {
      const matched = COUNTRIES.find(
        (c) => c.dialCode !== "+" && val.startsWith(c.dialCode)
      );
      if (matched) {
        setSelectedCountry(matched);
        val = val.slice(matched.dialCode.length);
      }
    }

    // Keep only digits
    const cleaned = val.replace(/\D/g, "").slice(0, selectedCountry.maxLength);
    setRawDigits(cleaned);

    const fullFormatted = cleaned
      ? `${selectedCountry.dialCode} ${formatDigits(cleaned, selectedCountry.code)}`
      : "";
    const isValid = selectedCountry.pattern.test(cleaned);

    onChange(fullFormatted, isValid);
  };

  const handleCountrySelect = (country: CountryInfo) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery("");

    // Truncate existing digits if they exceed the new country's max
    const trimmedDigits = rawDigits.slice(0, country.maxLength);
    setRawDigits(trimmedDigits);

    const fullFormatted = trimmedDigits
      ? `${country.dialCode} ${formatDigits(trimmedDigits, country.code)}`
      : "";
    const isValid = country.pattern.test(trimmedDigits);
    onChange(fullFormatted, isValid);
  };

  // Filter countries in search dropdown
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return COUNTRIES;
    const q = searchQuery.toLowerCase();
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Visual helper display
  const formattedDisplay = formatDigits(rawDigits, selectedCountry.code);
  const showError = touched && !validation.isValid && rawDigits.length > 0;
  const showSuccess = rawDigits.length > 0 && validation.isValid;

  return (
    <div className={`relative ${className}`}>
      <div className="relative flex items-center rounded-lg border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-[#0E1E30] focus-within:border-[#55D98A] transition-colors">
        {/* Country Selector Dropdown Trigger */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1.5 px-3 py-3 border-r border-neutral-300 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-white/5 rounded-l-lg transition-colors cursor-pointer shrink-0 select-none text-sm font-medium"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
          title={`Selected: ${selectedCountry.name} (${selectedCountry.dialCode})`}
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <span className="font-mono text-xs font-semibold">{selectedCountry.dialCode}</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-60 ml-0.5" />
        </button>

        {/* National Number Input */}
        <div className="relative flex-1">
          <input
            id={id}
            type="tel"
            required={required}
            value={formattedDisplay}
            onChange={handleInputChange}
            onBlur={() => setTouched(true)}
            placeholder={selectedCountry.format}
            className="w-full px-3.5 py-3 bg-transparent text-base sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none font-mono"
            autoComplete="tel-national"
          />

          {/* Validation Icon Feedback */}
          {showSuccess && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#059669] dark:text-[#55D98A] pointer-events-none">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
          )}
          {showError && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 pointer-events-none">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      {/* Validation Message / Helper Hint */}
      {showError ? (
        <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
          <span>{validation.message}</span>
        </p>
      ) : (
        <p className="mt-1 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
          {selectedCountry.flag} {selectedCountry.name}: {selectedCountry.hint}
        </p>
      )}

      {/* Country Selection Dropdown Menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 left-0 top-[calc(100%+6px)] w-72 sm:w-80 max-h-72 bg-white dark:bg-[#13273D] border border-neutral-300 dark:border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Search bar inside dropdown */}
          <div className="p-2 border-b border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#0E1E30]">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or dial code..."
              className="w-full px-3 py-1.5 rounded-md bg-white dark:bg-[#13273D] border border-neutral-300 dark:border-white/10 text-xs text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#55D98A]"
            />
          </div>

          {/* Country list */}
          <div className="overflow-y-auto flex-1 divide-y divide-neutral-100 dark:divide-white/5 py-1">
            {filteredCountries.length === 0 ? (
              <div className="px-4 py-3 text-xs text-neutral-500 dark:text-neutral-400 text-center">
                No matching country found
              </div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = c.code === selectedCountry.code;
                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => handleCountrySelect(c)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#55D98A]/15 text-[#059669] dark:text-[#55D98A] font-semibold"
                        : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-base leading-none">{c.flag}</span>
                      <span className="truncate">{c.name}</span>
                    </div>
                    <span className="font-mono text-neutral-500 dark:text-neutral-400 ml-2 shrink-0">
                      {c.dialCode}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Pretty formatting with clean spacing
function formatDigits(digits: string, countryCode: string): string {
  if (!digits) return "";

  if (countryCode === "IN") {
    // 5 5 (e.g. 98765 43210)
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }

  if (countryCode === "US" || countryCode === "CA") {
    // (123) 456-7890
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  if (countryCode === "GB") {
    // 7911 123456
    if (digits.length <= 4) return digits;
    return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  }

  if (countryCode === "AE" || countryCode === "SA") {
    // 50 123 4567
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
    return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
  }

  if (countryCode === "SG") {
    // 8123 4567
    if (digits.length <= 4) return digits;
    return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  }

  // Fallback 4-4 grouping
  if (digits.length <= 4) return digits;
  if (digits.length <= 8) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 8)} ${digits.slice(8)}`;
}
