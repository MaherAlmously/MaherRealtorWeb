import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for HostGator shared hosting: `npm run build` produces
  // a plain out/ folder of HTML/CSS/JS that gets uploaded directly to
  // public_html. There is no Node server in production; the contact form
  // posts client-side to Web3Forms instead of a Next.js API route. See
  // PRODUCTION.md.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
