import Head from 'next/head'
import { getDatabase } from '../lib/client'

const databaseId = process.env.NOTION_DATABASE_ID

export default function Home({ pages }) {

  /* logging response */
  console.log({
    pages: pages,
    avatar: pages[0].properties.Author.avatar_url
  })


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next | Notion CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js + Notion Content Management System
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Notion Database
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">

        {pages && pages.map((page) => {
          return (
            <a
            key={page.id}
            href={`/${page.id}`}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">{page.properties.Name.title[0].plain_text} &rarr;</h3>
            <p className="mt-4 text-xl">
              {page.properties.Description.rich_text[0].plain_text}
            </p>
            <small className="mt-4 text-gray-500">{page.properties.Date.date.start}</small>
            <div className='mt-4 flex items-center justify-start text-blue-500 text-xl'>{page.properties.Author.avatar_url === null ? <img src={'/favicon.ico'}/> : <img className="rounded-full mr-2" src={page.properties.Author.created_by.avatar_url} width={24} height={24} />}{' '}{page.properties.Author.created_by.name}</div>
          </a>
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
      pages: database
    },
    /* revalidate: 1 */
  }
}