import type { Metadata } from "next";
import { Dancing_Script, Roboto, Sniglet} from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const sniglet = Sniglet({
  variable: "--font-sniglet",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rabia Sarıkaya - Diyetisyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${roboto.variable} ${sniglet.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
