import Link from 'next/link'
import { getDatabase, getPages, getBlocks } from '../lib/client'
import { databaseId } from './index'

const Pages = ({ page, blocksForPage }) => {

	console.log({
		page: page,
		blocks: blocksForPage
	})

	return (
		<>
			<h1>Pages</h1>
			<main>
				<p>main</p>
			</main>

			<Link href='/'>
				<a className='text-blue-800 font-semibold mt-4 hover:underline'>back to home</a>
			</Link>
		</>
	)
}

export default Pages

export const getStatticPaths = async () => {
	const database = await getDatabase(databaseId)
	const paths = database.map((page) => ({
		params: {
			id: page.id,
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export const getStatticProps = async ({ post }) => {
	const { id } = post.params
	const database = await getDatabase(databaseId)
	const pages = await getPages(id)
	const blocks = await getBlocks(id)
	const props = pages.map((page) => {
		const blocksForPage = blocks.filter((block) => block.pageId === id)
		return {
			page,
			blocks: blocksForPage,
		}
	})
	return props
}