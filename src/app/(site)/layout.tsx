import type { Metadata } from "next";
import Nav from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
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
    <html lang="en">   
      <body className="flex flex-col min-h-screen bg-primary-100">
        {/* Hack because of fixed position of navbar */}
        <div className="h-[94px]"></div>
        <Nav/>
          <main className="flex-grow px-2">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
