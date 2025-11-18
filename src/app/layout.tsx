import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Bride Tribe Advance 2026",
  description:
    "Join us for the 11th Annual Bride Tribe Advance 2026 - A transformative 3-day experience of identity, healing, and spiritual rejuventation.",
  keywords: [
    "Bride Tribe Advance",
    "Christian Conference",
    "Inner Healing",
    "Prophetic Ministry",
    "Bride Ministries International",
  ],
  authors: [{ name: "Bride Ministries International" }],
  icons: {
    icon: "/brideministries.png",
    apple: "/brideministries.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
