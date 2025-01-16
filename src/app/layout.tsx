import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

// Metadata for page title, description, and favicon
export const metadata: Metadata = {
  title: "Wasteland",
  description: "A dystopian inventory game",
  icons: [
    { rel: "icon", url: "/favicon.ico" }, // Path to the favicon file
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" }, // Optional: For Apple devices
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        {/* Add dynamic metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons[0].url} />
        {metadata.icons[1] && (
          <link rel="apple-touch-icon" href={metadata.icons[1].url} />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
