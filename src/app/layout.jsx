import { Inter, DM_Mono } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FloatingButtons from "@/components/shared/FloatingButtons";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "3x Growth Consulting - Sales Systems for SME Founders",
  description:
    "Build predictable sales systems for your SME business. 3x Growth helps you fix broken sales processes and scale revenue consistently.",
  keywords: "sales consulting, SME growth, sales systems, revenue growth, B2B sales",
  ogTitle: "3x Growth Consulting",
  ogDescription:
    "Stop guessing when your next sale will come. We fix broken sales systems so you can grow predictably.",
  authors: [{ name: "Sandeep Gupta", url: "https://www.salessyllabus.com" }],
  generator: "v0.app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0066CC" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar />
        <FloatingButtons />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
