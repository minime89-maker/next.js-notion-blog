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
	// 	block:block,
	// })

	switch (type) {
		case "paragraph":
			return (
				<p className='my-2'>
					<Text key={id} text={value.text} />
				</p>
			);
		case "heading_1":
			return (
					<Heading_1 key={id}>{value.text[0].plain_text}</Heading_1>
			);
		case "heading_2":
			return (
				<Heading_2 key={id}>{value.text[0].plain_text}</Heading_2>
			);
		case 'heading_3':
			return (
				<Heading_3 key={id}>{value.text[0].plain_text}</Heading_3>
			)
		case 'callout':
			return (
				<Text key={id}>{value.icon.emoji}{' '}{value.text[0]?.plain_text}</Text>
			)
		case 'code':
			return (
				<Code key={id} >{value.text[0].plain_text}</Code>
			)
		
		case 'image':
			const src = value.type === 'external' ? value.external.url : value.file.url
			const caption = value.caption ? value.caption[0]?.plain_text : ''
			return (
				<div className='w-full my-4'>
					<Image key={id} src={src} alt={caption} width={500} height={300} layout='responsive' sizes='50vw' />
				</div>
			)
		case 'bulleted_list_item':
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
				<div className='frame-container'>
					<iframe src={value.external.url} title={value.external.caption} frameBorder='0'/>
				</div>
			)
		default:
			return `Unsupported block (${type === "unsupported" ? "unsupported" : type})`;
	}
}

const Pages = ({ pages, blocks }) => {

	return (
		<Layout>
			<Head>
				<title>{pages && pages.properties.Name.title[0]?.plain_text}</title>
			</Head>

			<section className="max-w-3xl mx-auto mb-12">
			{pages && (
				<div key={pages.id} className='pb-2'>
					<h1 className="text-4xl pb-4 font-semibold text-textPrimary dark:text-textPrimaryDark">{pages.properties.Name.title[0]?.plain_text}</h1>
					<div className='flex items-center py-2'>
						<img className='rounded-full h-6 w-6 mr-2' src={pages.properties.Author.created_by.avatar_url} width={12} height={12} />
						<small>{pages.properties.Author.created_by.name}&nbsp;|&nbsp;</small>
						<small className='text-textTertiary dark:text-textTertiaryDark'>
							{format(new Date(pages.properties.Date.date.start), 'MMM dd, yyyy')}
						</small>
					</div>
					<p className='text-md italic text-textSecondary dark:text-textSecondaryDark '>{pages.properties.Description.rich_text[0]?.plain_text}</p>
				</div>
			)}
			</section>
			
			<article className='max-w-3xl mx-auto'>
				{blocks && blocks.map((block) => {
					return (
						<span key={block.id}>
							{blockPage(block)}
						</span>
					)
				})}
			</article>
		</Layout>
	)
}

export default Pages

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
		revalidate: 1
	}
}
