import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Happy Birthday Sayang ❤️',
  description: 'Website ulang tahun spesial untuk pacar tersayang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}