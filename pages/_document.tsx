import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="application-name"
          content="Blog"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Blog"
        />
        <meta
          name="description"
          content="Notion Blog"
        />
        <meta
          name="format-detection"
          content="telephone=no"
        />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="msapplication-config"
          content="/icons/browserconfig.xml"
        />
        <meta
          name="msapplication-TileColor"
          content="#2B5797"
        />
        <meta
          name="msapplication-tap-highlight"
          content="no"
        />
        <meta
          name="theme-color"
          content="#000000"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          href="/icons/favicon.ico"
        />
        <meta
          name="theme-color"
          content="#000000"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
