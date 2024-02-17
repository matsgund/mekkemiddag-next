import type { Metadata } from "next";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mekkemiddag",
  description: "Mekkemiddag. Din smarte digitale kokebok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-primary-100">
        <Nav/>
          <main className="flex-grow">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
