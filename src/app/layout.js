import Header from '@/components/Header'
import './globals.css'
import Providers from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {/* Navbar */}
          {/* Searchboz */}

          {children}
        </Providers>
      </body>
    </html>
  )
}
