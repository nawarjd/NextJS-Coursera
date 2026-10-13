import type { Metadata } from "next";
import localFont from "next/font/local";
import "@assets/styles/globals.css";

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NJStore",
  description: "An e-commerce storefront built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
