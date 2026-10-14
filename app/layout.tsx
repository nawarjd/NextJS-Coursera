import type { Metadata } from "next";
import localFont from "next/font/local";
import "@assets/styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import {APP_DESCRIPTION, APP_NAME, SERVER_URL} from "@/lib/constants";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
