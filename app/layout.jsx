import "./globals.css"
import { Inter } from 'next/font/google'
import { QueryProvider } from "@/components/react-query-provider"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "User Management",
  description: "A simple user management application",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}

