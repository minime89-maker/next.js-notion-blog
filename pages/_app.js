import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
