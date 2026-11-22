import type { Metadata } from "next";
import Script from "next/script";
import "./compiled.css";

export const metadata: Metadata = {
  title: "Digital Edge Marketing Service | Digital Marketing Agency in Tamil Nadu",
  description:
    "Meta Ads, Google Ads, social media management, SEO and Google Business Profile services for local businesses in Tamil Nadu, India.",
  icons: {
    icon: "/logo-icon-dark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('digital_edge_theme');
                  var root = document.documentElement;
                  if (saved === 'light') {
                    root.classList.remove('dark');
                    root.classList.add('light');
                    root.setAttribute('data-theme', 'light');
                    root.style.colorScheme = 'light';
                  } else {
                    root.classList.add('dark');
                    root.classList.remove('light');
                    root.setAttribute('data-theme', 'dark');
                    root.style.colorScheme = 'dark';
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body 
        className="min-h-screen bg-[#FAF9F5] dark:bg-[#0D1927] text-neutral-900 dark:text-white antialiased selection:bg-[#55D98A] selection:text-[#0D1927] transition-colors duration-200"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
