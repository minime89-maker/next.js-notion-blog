import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Footer, { FooterProps } from './Footer'

export type LayoutProps = {
  home?: boolean
  children?: React.ReactNode
  src: string
  authorDescription?: string
  authorSlug?: string
} & FooterProps

const Layout = ({
  children,
  home,
  src,
  authorSlug,
  authorDescription,
  facebook,
  twitter,
  linkedin,
  github,
  authorName,
}: LayoutProps) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto my-auto min-w-full min-h-screen bg-backgroundColor dark:bg-backgroundDark">
      <Head>
        <meta
          name="description"
          content={`${authorDescription}`}
        />
        <meta
          property="og:title"
          content={`${authorName} Blog`}
        />
        <meta
          name="author"
          content={authorName}
        />
        <meta
          name="image"
          property="og:image"
          content={src}
        />
      </Head>

      <header className="flex justify-between items-center">
        {home ? (
          <>
            <nav className="flex items-start justify-between max-w-3xl w-full relative mx-auto p-5 mt-8  bg-backgroundColor dark:bg-backgroundDark ">
              <div className="text-left">
                <div className="mb-2  animate-wiggle">
                  <Image
                    src={src}
                    width="80px"
                    height="80px"
                    alt="Profile of the Author"
                    className="rounded-full "
                  />
                </div>

                <div className="text-left">
                  <h1 className="text-3xl font-semibold text-gray-900 dark:text-textPrimaryDark">
                    {authorName}
                  </h1>
                  <h2 className="text-md mb-2">{authorSlug}</h2>
                  <p className="text-md max-w-xs italic text-textSecondary dark:text-textSecondaryDark">
                    {authorDescription}
                  </p>
                </div>
              </div>

              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                    />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1A202C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
            </nav>
          </>
        ) : (
          <>
            <nav className="flex items-center justify-between max-w-3xl mx-auto w-full mt-8 p-5 my-12">
              <Link href="/">
                <a className="text-4xl font-bold post-link">Blog</a>
              </Link>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                    />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1A202C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
            </nav>
          </>
        )}
      </header>

      <main className="container mx-auto my-auto mt-6 px-6 max-w-3xl">
        {children}
        {!home && (
          <div className="mt-10">
            <Link href="/">
              <a className="post-link text-3xl pr-2">&larr;</a>
            </Link>
          </div>
        )}
      </main>

      <Footer
        facebook={facebook}
        twitter={twitter}
        linkedin={linkedin}
        github={github}
        authorName={authorName}
      />
    </div>
  )
}

export default Layout
