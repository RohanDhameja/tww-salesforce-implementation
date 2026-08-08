import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohandhameja.github.io/tww-salesforce-implementation/"),
  title: {
    default: "Together We Will — Implementation Progress",
    template: "%s | Together We Will",
  },
  description:
    "Public progress dashboard for the Together We Will Foundation Salesforce implementation.",
  openGraph: {
    title: "Together We Will — Implementation Progress",
    description: "See what is complete, what is in progress, and what comes next.",
    type: "website",
    url: "https://rohandhameja.github.io/tww-salesforce-implementation/",
    images: [
      {
        url: "https://rohandhameja.github.io/tww-salesforce-implementation/og.png",
        width: 1729,
        height: 909,
        alt: "Together We Will Salesforce Implementation — Progress, Phases, Decisions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Together We Will — Implementation Progress",
    description: "Progress, phases, and decisions for the Salesforce implementation.",
    images: ["https://rohandhameja.github.io/tww-salesforce-implementation/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
