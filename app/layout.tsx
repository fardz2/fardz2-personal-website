import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Muhammad Faridz | fardz2",
  description:
    "I am Muhammad Faridz, a student pursuing a Bachelor's degree in Informatics at Telkom University Bandung, specializing in Front-End and Back-End Web Development, Front-End Mobile Development, and Machine Learning. Choosing to major in informatics was a logical decision for me, given my background in vocational school. I have a particular interest in programming, focusing on Web and Mobile Development. My goal is to improve my computer skills and effectively tackle emerging technological challenges. I began my educational journey at SMK Telkom Banjarbaru in Kalimantan Selatan, where I studied from July 2018 to May 2021 and received the OPES (One Pipe Education System) scholarship from the Telkom Foundation. Currently, I am continuing my studies at Telkom University in Bandung, where I have been enrolled since September 2021. fardz2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  dark:bg-gray-950 scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
