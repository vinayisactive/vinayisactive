import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google'
import { Navbar } from "@/components/sections";

const font =  Manrope({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = { 
  title: "vinayisactive",
  description: "Tadawww vinay's portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <body className="overflow-x-hidden scroll-smooth bg-[#ffffff]">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
