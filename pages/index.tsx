import Head from 'next/head'
import Link from 'next/link'
import { getDatabase } from '../lib/client'
import { format } from 'date-fns'
import Layout, { LayoutProps } from '../components/Layout'
import { useTheme } from 'next-themes'

export const databaseId = process.env.NOTION_DATABASE_ID as string

export type HomeProps = {
  database: Array<{ [key: string]: any }>
  author: { [key: string]: any }
} & LayoutProps

const Home = ({ database, author }: HomeProps) => {
  const { theme } = useTheme()

  return (
    <Layout
      home
      src={database[0].properties.Author.created_by.avatar_url}
      authorName={author.properties.Name.title[0].plain_text}
      authorSlug={author.properties.Slug.rich_text[0].plain_text}
      authorDescription={author.properties.Description.rich_text[0].plain_text}
      facebook={author.properties.Social.multi_select[0].name}
      twitter={author.properties.Social.multi_select[1].name}
      linkedin={author.properties.Social.multi_select[2].name}
      github={author.properties.Social.multi_select[3].name}
    >
      <Head>
        <title>{database[0].properties.Author.created_by.name} Blog</title>
      </Head>

      <section>
        <div className="flex flex-col items-start justify-center max-w-3xl mt-6 mx-auto sm:w-full">
          {database &&
            database.map((page) => {
              if (page.properties.published.checkbox) {
                return (
                  <Link
                    key={page.id}
                    href={`/${page.properties.Slug.rich_text[0].plain_text}`}
                  >
                    <a className="p-4 mt-4 text-left max-w-3xl  hover:text-blue-600 focus:text-blue-600">
                      <h1 className="text-xl font-semibold text-textPrimary dark:text-textPrimaryDark post-link">
                        {page.properties.Name.title[0].plain_text}
                      </h1>
                      <p className="mt-1.5 my-4 text-md text-textSecondary dark:text-textSecondaryDark">
                        {page.properties.Description.rich_text[0].plain_text}
                      </p>
                      <div className="flex items-center justify-between text-textTertiary dark:text-textTertiaryDark">
                        <small className="flex items-center justify-start">
                          <svg
                            className="mr-1 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={theme === 'dark' ? '#ADADAD' : '#6A6462'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line
                              x1="16"
                              y1="2"
                              x2="16"
                              y2="6"
                            ></line>
                            <line
                              x1="8"
                              y1="2"
                              x2="8"
                              y2="6"
                            ></line>
                            <line
                              x1="3"
                              y1="10"
                              x2="21"
                              y2="10"
                            ></line>
                          </svg>
                          {format(
                            new Date(page.properties.Date.date.start),
                            'MMM dd, yyyy',
                          )}
                        </small>
                      </div>
                    </a>
                  </Link>
                )
              } else {
                return null
              }
            })}
        </div>
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)
  return {
    props: {
      author: database[0],
      database: database.slice(1),
    },
    revalidate: 10,
  }
}
