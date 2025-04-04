import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Head } from "next/document";

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
  description: "LT-Controls specializes in delivering cutting-edge automation solutions, including PLC programming, HMI design, and SCADA systems, tailored to meet the unique needs of our clients.",
  icons: {
    icon: "/Logo Final CMYK.svg",
    shortcut: "/Logo Final CMYK.svg",
    apple: "/Logo Final CMYK.svg",
    
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
        <meta
          name="google-site-verification"
          content={metadata.verification}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
