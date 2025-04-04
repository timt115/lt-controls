import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Head } from "next/document";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata & { verification: string } = {
  title: "LT-Controls | Your Automation Partner",
  description:
    "LT-Controls specializes in delivering cutting-edge automation solutions, including PLC programming, HMI design, and SCADA systems, tailored to meet the unique needs of our clients.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: "--j9bKNeuO5XPEXHhODUYJSPhswgZ7NEhDzaDIhHHi0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="google-site-verification"
          content="--j9bKNeuO5XPEXHhODUYJSPhswgZ7NEhDzaDIhHHi0"
        />
        <title>LT-CONTROLS</title>
        <meta
          name="description"
          content="LT-CONTROLS - Your trusted partner in delivering cutting-edge automation solutions."
        />
        <meta
          name="keywords"
          content="LT-CONTROLS, Automation, automation solutions, PLC programming, HMI design, SCADA systems, Food and Beverage Automation"
        />
        <meta name="url" content="https://ltcontrols.com" />
        <meta name="og:title" content="LT-CONTROLS" />
        <meta
          name="og:description"
          content="LT-CONTROLS - Your trusted partner in delivering cutting-edge automation solutions."
        />
        <meta name="og:image" content="/favicon.svg" />
        <meta name="og:url" content="https://ltcontrols.com" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="LT-CONTROLS" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Toaster position="bottom-right" richColors />

        <Footer />
      </body>
    </html>
  );
}
