import './globals.css'

export const metadata = {
  title: 'Otis Valen | Creative Designer',
  description: 'Digital designer specializing in visual identity, interactive experiences, and creative coding.',
  icons: {
    icon: '/images/global/site-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}