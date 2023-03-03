import Header from '@/components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Navbar */}
        {/* Searchboz */}

        {children}
      </body>
    </html>
  )
}
