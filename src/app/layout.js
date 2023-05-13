import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is IMDB Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {/* Header */}
        <Header/>
        <Navbar/>
        {children}
        </Providers>
      </body>
    </html>
  )
}
