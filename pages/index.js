import Head from 'next/head'
import Link from 'next/link'
import { getDatabase } from '../lib/client'
import { format } from 'date-fns'
import Layout from '../components/layout'
import { useTheme } from 'next-themes'

export const databaseId = process.env.NOTION_DATABASE_ID

const Home = ({ database }) => {

  const { theme } = useTheme()

  /* logging response */
  // console.log({
  //   pages: database,
  //   theme: theme
  // })

  return (
    <Layout home >
      <Head>
        <title>Minja's Blog</title>
      </Head>

      <section>
      <div className="flex flex-col items-start justify-center max-w-3xl mt-6 mx-auto sm:w-full">
           {database && database.map((page) => {
             return (
               <Link
                 key={page.id}
                 href={`/${page.properties.Slug.rich_text[0].plain_text}`}
               >
                 <a className="p-4 mt-4 text-left max-w-3xl  hover:text-blue-600 focus:text-blue-600">
                   <h1 className="text-xl font-semibold text-textPrimary dark:text-textPrimaryDark hover:text-social hover:underline">{page.properties.Name.title[0].plain_text}</h1>
                   <p className="mt-1.5 my-4 text-md text-textSecondary dark:text-textSecondaryDark">
                     {page.properties.Description.rich_text[0].plain_text}
                   </p>
                   <div className='flex items-center justify-between text-textTertiary dark:text-textTertiaryDark'>
                   <small className='flex items-center justify-start'>
                     <svg className="mr-1 text-white" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#ADADAD' : '#6A6462'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                     {format(new Date(page.properties.Date.date.start), 'MMM dd, yyyy')}
                   </small>
                   </div>
                 </a>
               </Link>
             )
           })}
         </div>
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      database: database
    },
    revalidate: 1
  }
}