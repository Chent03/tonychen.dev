import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/ui/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony Chen - Software Developer",
  description: "Tony Chen Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <Navbar />
            <main className="min-h-screen flex-auto">
              <div className="sm:px-8 mt-6">
                <div className="mx-auto w-full max-w-6xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-6xl flex flex-col">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
