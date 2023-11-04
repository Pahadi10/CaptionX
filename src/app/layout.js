import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={
          inter.className +
          " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white"
        }
      >
        <main className="p-4 max-w-2xl mx-auto">
          
        <header className="flex flex-col sm:flex-row justify-between my-2 sm:my-8">
            <div className="flex justify-center sm:items-start gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <span className="mb-4 sm:mb-0">CaptionX</span>
            </div>
            <div className="flex justify-center sm:items-start gap-1">
            <nav className="flex gap-6 text-white/80">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/ContactUs">Contact</Link>
            </nav>
            </div>      
          </header>

          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
