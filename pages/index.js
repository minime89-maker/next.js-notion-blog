import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getDatabase } from '../lib/client'
import { Footer } from '../components/layout'
import { format } from 'date-fns'
import Template from '../components/home'

export const databaseId = process.env.NOTION_DATABASE_ID

const Home = ({ database }) => {

  /* logging response */
  // console.log({
  //   pages: database,
  //   theme: theme
  // })

  return (
    <Template home>
      <Head>
        <title>Notion's Blog</title>
      </Head>

      <section>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
           {database && database.map((page) => {
             return (
               <Link
                 key={page.id}
                 href={`/${page.properties.Slug.rich_text[0].plain_text}`}
               >
                 <a className="p-4 mt-4 text-left  w-96  hover:text-blue-600 focus:text-blue-600">
                   <h1 className="text-xl font-semibold text-textPrimary dark:text-textPrimaryDark hover:text-social hover:underline">{page.properties.Name.title[0].plain_text}</h1>
                   <p className="mt-1.5 my-4 text-md text-textSecondary dark:text-textSecondaryDark">
                     {page.properties.Description.rich_text[0].plain_text}
                   </p>
                   {/* <small className="mt-4 text-textTertiary dark:text-textTertiaryDark">{page.properties.Date.created_time}</small> */}
                   {/* <div className='flex items-center justify-between text-textTertiary dark:text-textTertiaryDark'>
                   <small className='flex items-center justify-start'>
                     <svg className="mr-1 text-white" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#ADADAD' : '#6A6462'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                     {format(new Date(page.properties.Date.created_time), 'MMM dd, yyyy')}
                   </small> */}
                   {/* <small>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#ADADAD' : '#6A6462'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                   </small> 
                   </div>*/}
                 </a>
               </Link>
             )
           })}
         </div>
      </section>
    </Template>

    // <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundColor dark:bg-backgroundDark">
     

    //   <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
       

    //     {!database && <p>Loading...</p>}
    //     <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    //       {database && database.map((page) => {
    //         return (
    //           <Link
    //             key={page.id}
    //             href={`/${page.properties.Slug.rich_text[0].plain_text}`}
    //           >
    //             <a className="p-4 mt-4 text-left  w-96  hover:text-blue-600 focus:text-blue-600">
    //               <h1 className="text-xl font-semibold text-textPrimary dark:text-textPrimaryDark hover:text-social hover:underline">{page.properties.Name.title[0].plain_text}</h1>
    //               <p className="mt-1.5 my-4 text-md text-textSecondary dark:text-textSecondaryDark">
    //                 {page.properties.Description.rich_text[0].plain_text}
    //               </p>
    //               {/* <small className="mt-4 text-textTertiary dark:text-textTertiaryDark">{page.properties.Date.created_time}</small> */}
    //               <div className='flex items-center justify-between text-textTertiary dark:text-textTertiaryDark'>
    //               <small className='flex items-center justify-start'>
    //                 <svg className="mr-1 text-white" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#ADADAD' : '#6A6462'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    //                 {format(new Date(page.properties.Date.created_time), 'MMM dd, yyyy')}
    //               </small>
    //               {/* <small>
    //               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#ADADAD' : '#6A6462'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    //               </small> */}
    //               </div>
                 
                 
    //             </a>
    //           </Link>
    //         )
    //       })}
    //     </div>
    //   </main>

    //   <Footer />

    // </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      database: database
    },
    /* revalidate: 1 */
  }
}