import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-terminal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Upek Perera | TMU CS Co-op Portfolio",
  description:
    "A portfolio for Upek Perera, a TMU Computer Science student building software projects for co-op opportunities.",
  openGraph: {
    title: "Upek Perera | TMU CS Co-op Portfolio",
    description:
      "TMU Computer Science co-op portfolio featuring NotiStock, Java, Python, mobile projects, volunteering, and contact links.",
    type: "website",
    images: [
      "https://raw.githubusercontent.com/Upekcapy/portfolio/main/public/images/pfp.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
