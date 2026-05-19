import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Mention Alerter – Get alerts when your brand is mentioned",
  description: "Monitors social media platforms for brand mentions and sends instant alerts with sentiment analysis and response suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f4c29b54-c8ef-4bfa-8937-1fc0021c0407"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
