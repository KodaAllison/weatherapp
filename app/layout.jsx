import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'WeatherApp - Real-time Global Weather',
  description: 'Check real-time weather conditions for cities around the world',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
