import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getDatabase } from '../lib/client'

export const databaseId = process.env.NOTION_DATABASE_ID

export default function Home({ database }) {

  /* logging response */
  // console.log({
  //   pages: database,
  // })

  // calculate reading time for each page
  // const pages = database.map(page => {
  //   const readingTime = Math.ceil(page.content.length / 200)
  //   return {
  //     ...page,
  //     readingTime,
  //   }
  // })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-8">
      <Head>
        <title>Next | Notion CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center divide-y divide-gray-200 px-4">
        <section className='flex items-start justify-start'>
          <Image src={`/profile_pic.png`} width="80" height="80" alt='Profile of the Author' className="rounded-md" />
          <div className="text-left px-4 ">
            <h1 className='text-xl font-semibold text-gray-900 leading-relaxed'>Ilya Volodarsky</h1>
            <p className='text-xs text-gray-500 leading-relaxed'>Founder @Segment</p>
            <p className='text-xs text-gray-500 leading-relaxed mb-3'>Angel Investor in Climate Tech & Healthcare</p>
            <a className='bg-blue-400 text-white p-1.5 font-semibold rounded-md shadow-md' href="https://twitter.com">Follow me</a>
          </div>
        </section>

        {/* <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Notion Database
          </code>
        </p> */}

        {!database && <p>Loading...</p>}
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
          {database && database.map((page) => {
            return (
              <Link
                key={page.id}
                href={`/${page.properties.Slug.rich_text[0].plain_text}`}
              >
                <a className="p-4 mt-4 text-left  w-96  hover:text-blue-600 focus:text-blue-600">
                {/* <div className='mt-4  mb-2 text-gray-700 flex items-center'>{page.properties.Author.avatar_url === null ? <img src={'/favicon.ico'} /> : <img className="rounded-md w-6 h-6 mr-2" src={page.properties.Author.created_by.avatar_url} width={64} height={64} />}{' '}{page.properties.Author.created_by.name}</div> */}
                  <h3 className="text-xl font-semibold text-gray-900">{page.properties.Name.title[0].plain_text}</h3>
                  <p className="mt-4 text-md text-gray-800">
                    {page.properties.Description.rich_text[0].plain_text}
                  </p>
                  <small className="mt-4 text-gray-500">{page.properties.Date.created_time}</small>
                 
                </a>
              </Link>
            )
          })}


          {/* <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className="flex mt-4 items-center justify-center w-full h-10 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
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