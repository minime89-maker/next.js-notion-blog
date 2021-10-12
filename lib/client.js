import { Client } from '@notionhq/client'

const client = new Client({ auth: process.env.NOTION_API_KEY })

export const getDatabase = async (databaseId) => {
	const response = await client.databases.query({ 
		database_id: databaseId,
		sorts: [{ 
			property: 'Date', 
			direction: 'descending' 
		}],
	})
	console.log(response.results)
	return response.results
}

export const getPages = async (pageId) => {
	const response = await client.pages.retrieve({ 
		page_id: pageId,
	})
	return response
}

export const getBlocks = async (blockId) => {
	const response = await client.blocks.children.list({ 
		block_id: blockId,
		limit: 100,
	})
	return response
}