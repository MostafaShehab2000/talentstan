import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "../globals.css";
import { i18n } from "../../i18n-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "TalentStan | Enterprise Healthcare Workforce Marketplace",
  description: "The premier ecosystem connecting elite healthcare professionals with world-class facilities. The future of healthcare workforce management.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const isArabic = resolvedParams.lang === "ar";
  
  return (
    <html
      lang={resolvedParams.lang}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${isArabic ? 'font-arabic' : ''}`}>
        {children}
      </body>
    </html>
  );
}
