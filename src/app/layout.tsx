import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Header } from "@/components/layout/Header";
import { LiveActivityPopup } from "@/components/layout/LiveActivityPopup";
import { MobileNav } from "@/components/layout/MobileNav";
import { Providers } from "@/providers/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora-home.local"),
  title: {
    default: "Nexora Home | Premium Home Appliance Ecommerce",
    template: "%s | Nexora Home"
  },
  description:
    "Premium frontend-first home appliance ecommerce platform with Bangladesh pricing, conversion-led shopping, dashboards, and backend-ready architecture.",
  openGraph: {
    title: "Nexora Home",
    description: "Premium home appliance ecommerce experience.",
    type: "website",
    locale: "en_BD"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Home",
    description: "Premium home appliance ecommerce experience."
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-clip">
        <Providers>
          <Header />
          <main className="min-h-screen overflow-x-clip pt-[56px] pb-20 md:pt-[56px] lg:pt-[156px] md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
          <LiveActivityPopup />
          <FloatingActions />
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
