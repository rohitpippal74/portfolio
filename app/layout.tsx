import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Portfolio",
  description: "Professional portfolio showcasing my work and skills",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <Script id="force-light-theme" strategy="beforeInteractive">
          {`
            // Force light theme
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            document.documentElement.style.colorScheme = 'light';
            
            // Override any dark mode
            const style = document.createElement('style');
            style.textContent = \`
              html, body { background-color: white !important; color: black !important; }
              .dark { background-color: white !important; color: black !important; }
            \`;
            document.head.appendChild(style);
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
