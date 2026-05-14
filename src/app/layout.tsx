import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/lib/theme'
import { ProgressBar } from '@/components/micro';
import { RecaptchaProvider } from './RecaptchaProvider';

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Rahimi - Senior Android Engineer | Kotlin, Jetpack Compose",
  description: "Professional portfolio of Ali Rahimi, a Senior Android Engineer specializing in Kotlin, Jetpack Compose, Kotlin Multiplatform readiness, Clean Architecture, and high-performance mobile apps.",
  keywords: "Ali Rahimi, Senior Android Engineer, Android Developer, Kotlin, Jetpack Compose, Kotlin Multiplatform, Clean Architecture, MVVM, MVI, Mobile Apps, France",
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
    title: "Ali Rahimi - Senior Android Engineer | Kotlin, Jetpack Compose",
    description: "Professional portfolio of Ali Rahimi, a Senior Android Engineer specializing in Kotlin, Jetpack Compose, Clean Architecture, and high-performance mobile apps.",
    url: 'https://alirahimi.dev',
    siteName: 'Ali Rahimi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ali Rahimi - Senior Android Engineer | Kotlin, Jetpack Compose",
    description: "Professional portfolio of Ali Rahimi, a Senior Android Engineer specializing in Kotlin, Jetpack Compose, and modern Android architecture.",
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
        <RecaptchaProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </RecaptchaProvider>
      </body>
    </html>
  );
}
