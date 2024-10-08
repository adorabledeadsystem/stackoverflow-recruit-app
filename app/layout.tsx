import type { Metadata } from "next";
import { Inter } from "next/font/google";

import '@/styles/normalize.scss'
import { Header } from "@/components/Header/Header";
import Providers from "@/lib/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SearchOverflowApp",
  description: "App generated to search stackoverflow questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
