import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Components library",
  description: "Generated by create next app",
  authors: [
    { name: "Deemanth Poonacha", url: "https://github.com/DeemanthPoonacha" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex flex-col min-h-screen w-full ">
            <Header />
            <div className="w-full flex flex-col align-middle justify-center items-stretch p-1 sm:px-8 md:px-12 lg:px-24 xl:px-48 mb-auto dark:border-gray-800 light:border-gray-100 border-2">
              {children}
            </div>
            <div className="">footer</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
