import { Client } from '@notionhq/client'

const client = new Client({ auth: process.env.NOTION_TOKEN })

export const getDatabase = async (databaseId: string) => {
  const response = await client.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return response.results
}

export const getPages = async (pageId: string) => {
  const response = await client.pages.retrieve({
    page_id: pageId,
  })
  return response
}

export const getBlocks = async (blockId: string) => {
  const response = await client.blocks.children.list({
    block_id: blockId,
  })
  return response.results
}
