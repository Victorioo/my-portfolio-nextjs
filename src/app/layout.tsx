import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Victorio | Frontend Developer",
  description:
    "This is the portfolio of a Junior Developer, Victorio Caccioppoli.",
  icons: {
    icon: "./../../public/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="M6TJ8z10HXfwYVEvHM9K9DSeIlitXR-ziULk1qCet8M"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
