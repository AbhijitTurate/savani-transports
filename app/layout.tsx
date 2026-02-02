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
      { url: '/favicon-for-app/icon0.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/favicon-for-app/apple-icon.png' },
    ],
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
