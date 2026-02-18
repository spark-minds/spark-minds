import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Spark Minds App',
  description: `SparkMinds is an app for parents of young children between the ages of 0 to 8 years. The parents are the primary users of this app.

In 2026 we want to focus on parents of children who have hearing loss. The term used to refer to these children is “deaf and hard of hearing children - DHH children”. When DHH children receive rich spoken language input through high quality hearing technology (hearing aids or cochlear implants), they can learn to speak just as well as their peers who are not DHH. In the coming years, we will also include parents whose children have other language and learning challenges.

This app will provide information to parents about listening and spoken language development who want to address their child’s language development challenges. It will provide activity plans that help parents engage in daily conversations with their children in a manner that expands and enhances their language skills, preparing them for success in school and life.`,
  keywords: ['Spark Minds', 'App', 'Parents', 'Children', 'Hearing Loss', 'Language Development', 'Activity Plans', 'Parent Support'],
  authors: [{ name: 'Spark Minds', url: '/' }],
  creator: 'Spark Minds',
  publisher: 'Spark Minds',
  openGraph: {
    title: 'Spark Minds App',
    description: 'SparkMinds is an app for parents of young children between the ages of 0 to 8 years. The parents are the primary users of this app.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
