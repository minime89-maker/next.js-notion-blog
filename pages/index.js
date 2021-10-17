import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getDatabase } from '../lib/client'
import { Footer } from '../components/layout'
import { useTheme } from 'next-themes'
import { format } from 'date-fns'


export const databaseId = process.env.NOTION_DATABASE_ID

export default function Home({ database }) {

  const {theme, setTheme} = useTheme()

  /* logging response */
  console.log({
    pages: database,
    theme: theme
  })

  // calculate reading time for each page
  // const pages = database.map(page => {
  //   const readingTime = Math.ceil(page.content.length / 200)
  //   return {
  //     ...page,
  //     readingTime,
  //   }
  // })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundColor dark:bg-backgroundDark">
      <Head>
        <title>Next | Notion CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <nav className='flex items-center justify-between bg-navigationBar dark:bg-navigationDark w-full p-6'>
          <Image src={`/profile_pic.png`} width="80" height="80" alt='Profile of the Author' className="rounded-full"/>
          <div className="text-left pl-4 ">
            <h2 className='text-xl font-semibold text-gray-900 leading-relaxed dark:text-textPrimaryDark'>Ilya Volodarsky</h2>
            <p className='text-xs text-textPrimary leading-relaxed dark:text-textSecondaryDark'>Founder @Segment</p>
            <p className='text-xs text-textSecondary leading-relaxed mb-3 dark:text-textSecondaryDark'>Angel Investor in Climate Tech & Healthcare</p>
          </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="mb-10 animate-spin"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
           {/* {theme === 'dark' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>}
           {theme ==='light' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>} */}
          </button>
        </nav>

        {!database && <p>Loading...</p>}
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {database && database.map((page) => {
            return (
              <Link
                key={page.id}
                href={`/${page.properties.Slug.rich_text[0].plain_text}`}
              >
                <a className="p-4 mt-4 text-left  w-96  hover:text-blue-600 focus:text-blue-600">
                  <h1 className="text-xl font-semibold text-textPrimary dark:text-textPrimaryDark ">{page.properties.Name.title[0].plain_text}</h1>
                  <p className="my-4 text-md text-textSecondary dark:text-textSecondaryDark">
                    {page.properties.Description.rich_text[0].plain_text}
                  </p>
                  {/* <small className="mt-4 text-textTertiary dark:text-textTertiaryDark">{page.properties.Date.created_time}</small> */}
                  <small className='text-textTertiary dark:text-textTertiaryDark'>
                    {format(new Date(page.properties.Date.created_time), 'MMMM dd, yyyy')}
                  </small>
                 
                </a>
              </Link>
            )
          })}
        </div>
      </main>

      <Footer />

    </div>
  )
}


export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      database: database
    },
    /* revalidate: 1 */
  }
}