import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollDrivenCharacter from "@/components/ui/ScrollDrivenCharacter";
import CustomCursor from "@/components/ui/CustomCursor";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackson Ndeti | Full-Funnel Growth Marketer",
  description: "I scale growth with performance Meta ads + compounding SEO — built for measurable revenue. Specializing in Meta Ads, SEO Strategy, Landing Pages & CRO.",
  keywords: ["Growth Marketing", "Meta Ads", "SEO", "Performance Marketing", "Digital Marketing", "Kenya", "Nairobi"],
  authors: [{ name: "Jackson Ndeti" }],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Jackson Ndeti | Full-Funnel Growth Marketer",
    description: "I scale growth with performance Meta ads + compounding SEO — built for measurable revenue.",
    type: "website",
    images: ["/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jackson Ndeti | Full-Funnel Growth Marketer",
    description: "I scale growth with performance Meta ads + compounding SEO — built for measurable revenue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased relative`}>
        {/* Global Cinematic Background */}
        <ScrollDrivenCharacter />
        <CustomCursor />

        {children}

        {/* Floating Buttons */}
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}


