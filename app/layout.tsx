

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'DevFlix Portfólio',
  description: 'DevFlix Portfólio expiration Netflix',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.className} bg-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
