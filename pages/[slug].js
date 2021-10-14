import Link from 'next/link'
import Image from 'next/image'
import { Layout, Text, Heading_2, Code } from '../components/layout'
import { getDatabase, getPages, getBlocks } from '../lib/client'
import { databaseId } from './index'

const blockPage = (block) => {
	const { type, id } = block
	const value = block[type]
	// console.log({
	// 	value: value,
	// 	block:block
	// })
	
	switch (type) {
		case "paragraph":
			return (
					<Text key={id} text={value.text} />
			);
		case "heading_1":
			return (
				<Text key={id} text={value.text} />
			);
		case "heading_2":
			return (
				<Heading_2 key={id}>{value.text[0].plain_text}</Heading_2>
			);
		case "heading_3":
			return (
				<Text key={id} text={value.text} />
			);
		case 'callout':
			return (
				<Text key={id}>{value.icon.emoji}{' '}{value.text[0]?.plain_text}</Text>
			)
		case 'code':
			return (
				<Code key={id} >{value.text[0].plain_text}</Code>
			)
		case 'image':
		case 'external':
		case 'unsupported':
			return (
				<Image key={id} src={block.image.external.url} width={480} height={360} />	
			)
		case 'bulleted_list_item':
			return (
				<li>
					<Text text={value.text} />
				</li>
			)
		case 'numbered_list_item':
		return (
			<li>
				<Text text={value.text} />
			</li>
		)
		case 'quote':
			return (
				<blockquote>
					<Text text={value.text} />
				</blockquote>
			)
		case 'video':
			return (
				<iframe src={value.external.url} frameBorder="0" />
			)
		default:
			return `❌ Unsupported block (${type === "unsupported" ? "unsupported" : type})`;
	}
}

const Pages = ({ pages, blocks }) => {

	//const header = blocks.find(block => block.type === 'paragraph')

	const header = {
		title: pages.properties.Name.title[0].plain_text,
		authorImg: pages.properties.Author.created_by.avatar_url,
		description: pages.properties.Description.rich_text[0].plain_text
	}

	// console.log({
	// 	page: pages,
	// 	blocks: blocks,
	// 	header: header,
	// })

	return (
		<Layout>
			<header className="my-8">
				<h1 className="text-4xl font-semibold">{header.title}</h1>
				<h2 className='text-2xl'>{header.description}</h2>
				<div className='flex items-center pt-2'>
				<img className='rounded-md h-6 w-6 mr-2' src={header.authorImg} width={24} height={24} />
				<p className='text-gray-700'>
					{pages.properties.Date.created_time}
				</p>
				</div>
			</header>

			<main className='mb-8'>
				{blocks && blocks.map((block) => {
					//console.log(block.Slug)
					return (
						<div key={block.id}>
							{blockPage(block)}
						</div>
					)
				})}
			</main>

			<Link href='/'>
				<a className='text-blue-800 font-semibold hover:underline'>back to home</a>
			</Link>
		</Layout>
	)
}

export default Pages

//export getStaticPaths()
export async function getStaticPaths() {
	const db = await getDatabase(databaseId)
	return {
		paths: db.map((page) => ({
			params: {
				id: page.id,
				slug: page.properties.Slug.rich_text[0].plain_text
			}
		})),
		fallback: true
	}
}

//export getStaticProps()
export async function getStaticProps({ params }) {
	const { slug } = params
	const db = await getDatabase(databaseId)
	const filter = db.filter((page) => page.properties.Slug.rich_text[0]?.plain_text === slug)
	const pages = await getPages(filter[0].id)
	const blocks = await getBlocks(filter[0].id)
	return {
		props: {
			pages,
			blocks
		},
		/* revalidate: 1 */
	}
}
