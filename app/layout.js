import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebWWise",
  description: "Web Design & Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers attribute="class">
        <body className={inter.className}>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
