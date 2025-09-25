import "./global.css"
import Providers from "./Providers"


export const metadata = {
  title: 'Sr Sadra Portfolio',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        {/* <head>
            <link rel="icon" type="image/png" href="public/logooo.png" sizes="32x32" />
            <title>Sr Sadra Portfolio</title>
        </head> */}
        <body>
          <Providers>
            <div id="root">{children}</div>
          </Providers>
        </body>
    </html>
  )
}