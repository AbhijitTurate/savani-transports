import type { Metadata } from "next";
import { Figtree, Lexend } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap', // Ensures a better user experience
  variable: '--font-figtree', // Custom CSS variable
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: "Savani Transport",
  description: "Savani Transport is a logistics company that provides transportation services to businesses and individuals.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-for-app/icon1.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Savani Transport",
    description: "Savani Transport is a logistics company that provides transportation services to businesses and individuals.",
    type: "website",
    siteName: "Savani Transport",
  },
  twitter: {
    card: "summary",
    title: "Savani Transport",
    description: "Savani Transport is a logistics company that provides transportation services to businesses and individuals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${lexend.variable} antialiased`}
      >
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
