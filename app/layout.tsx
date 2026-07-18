import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/site/motion-provider";
import { siteConfig } from "@/lib/site-config";

const sans = Libre_Franklin({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadata.siteUrl),
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: [...siteConfig.metadata.keywords],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteConfig.metadata.siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    locale: "en_US",
    images: [
      {
        url: "/maher-logo.png",
        width: 1254,
        height: 1254,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: ["/maher-logo.png"],
  },
};

// Dark is the default theme. Only an explicit stored preference of "light"
// should turn it off; everything else (no preference, or "dark") stays dark.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", stored !== "light");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
