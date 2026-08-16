import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/lib/theme'
import { ProgressBar } from '@/components/micro';

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Rahimi - Android Software Engineer | Kotlin & Jetpack Compose",
  description: "Professional portfolio of Ali Rahimi, an Android Software Engineer specializing in Kotlin, Jetpack Compose, modular architecture, legacy modernization, and reliable production Android apps.",
  keywords: "Ali Rahimi, Android Software Engineer, Android Developer, Kotlin, Jetpack Compose, Kotlin Multiplatform, Clean Architecture, Modular Architecture, MVVM, MVI, Mobile Apps, France",
  authors: [{ name: "Ali Rahimi" }],
  creator: "Ali Rahimi",
  publisher: "Ali Rahimi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alirahimi.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ali Rahimi - Android Software Engineer | Kotlin & Jetpack Compose",
    description: "Professional portfolio of Ali Rahimi, an Android Software Engineer specializing in Kotlin, Jetpack Compose, modular architecture, and reliable production Android apps.",
    url: 'https://alirahimi.dev',
    siteName: 'Ali Rahimi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ali Rahimi - Android Software Engineer | Kotlin & Jetpack Compose",
    description: "Professional portfolio of Ali Rahimi, an Android Software Engineer specializing in Kotlin, Jetpack Compose, and modular Android architecture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ProgressBar />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
