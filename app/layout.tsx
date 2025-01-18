import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import PersonalSection from "@/components/PersonalSection";
import TopicLinks from "@/components/TopicLinks";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Portfloio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="Container py-8">
          <PersonalSection/>
          <TopicLinks/>
          {children}
        </div>
      </body>
    </html>
  );
}
