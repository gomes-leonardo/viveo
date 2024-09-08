import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
