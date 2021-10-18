import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Text, Heading_2, Code, Heading_1, Heading_3 } from '../components/template'
import { getDatabase, getPages, getBlocks } from '../lib/client'
import { databaseId } from './index'
import { format } from 'date-fns'
import Layout from '../components/layout'

const blockPage = (block) => {
	const { type, id } = block
	const value = block[type]
	
	// console.log({
	// 	value: value,
	// 	block:block
	// })

	switch (type) {
		case "paragraph":
			case 'heading_1':
				case 'heading_2':
				case 'heading_3':
			return (
				<Text key={id} text={value.text} />
			);
	
		// case "heading_1":
		// 	return (
		// 		<Heading_1 key={id}>{value.text}</Heading_1>
		// 	);
		// case "heading_2":
		// 	return (
		// 		<Heading_2 key={id}>{value.text[0].plain_text}</Heading_2>
		// 	);
		// case 'heading_3':
		// 	return (
		// 		<Heading_3 key={id}>{value.text[0].plain_text}</Heading_3>
		// 	)
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
				<img key={id} src={block.image.external.url} className='w-full max-w-3xl' />
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

	// console.log({
	// 	pages,
	//	blocks
	// })

	return (
		<Layout>
			<Head>
				<title>Post Title</title>
			</Head>

			<section className="max-w-3xl mx-auto">
			{pages && (
				<div key={pages.id} className='pb-8'>
					<h1 className="text-3xl font-semibold text-textPrimary dark:text-textPrimaryDark">{pages.properties.Name.title[0]?.plain_text}</h1>
					<div className='flex items-center py-2'>
						<img className='rounded-md h-6 w-6 mr-2' src={pages.properties.Author.created_by.avatar_url} width={12} height={12} />
						<small className='text-textTertiary dark:text-textTertiaryDark'>
							{format(new Date(pages.properties.Date.created_time), 'MMM dd, yyyy')}
						</small>
					</div>
					<h2 className='text-xl text-textSecondary dark:text-textSecondaryDark'>{pages.properties.Description.rich_text[0]?.plain_text}</h2>
				</div>
			)}
			</section>
			
			<article className='max-w-3xl mx-auto'>
				{blocks && blocks.map((block) => {
					return (
						<div key={block.id}>
							{blockPage(block)}
						</div>
					)
				})}
			</article>
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
