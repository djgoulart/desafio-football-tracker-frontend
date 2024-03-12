import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desafio | Football Tracker',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex items-center h-screen w-full overflow-hidden bg-gradient-to-r from-orange-400 to-rose-400">
            <div className="container px-0 flex justify-start shadow-lg rounded-lg bg-slate-100 max-h-[900px] overflow-hidden">
              <Navbar />
              <div className="w-full px-4">{children}</div>
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
