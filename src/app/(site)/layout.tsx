import type { Metadata } from "next";
import {Nav, Footer} from "@/components/layout";
import { BackgroundGrid } from "@/components/ui-components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mekkemiddag",
  description: "Mekkemiddag. Din smarte digitale kokebok.",
  icons: {
    icon: '/favicon/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">   
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-primary-100 to-primary-200">
        {/* Hack to give the navbar some height */}
        <div className="h-[94px]"></div>
        <Nav/>
          <main className="flex-grow z-30">
            <BackgroundGrid />
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
