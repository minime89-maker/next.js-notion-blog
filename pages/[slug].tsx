import Image from 'next/image';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  Text,
  Heading_2,
  Code,
  Heading_1,
  Heading_3,
  Callout,
  Divider,
} from '../components/Template';
import { getDatabase, getPages, getBlocks } from '../lib/client';
import { databaseId } from './index';
import { format } from 'date-fns';
import Layout from '../components/Layout';

// @ts-ignore
const BlockPage = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p className="my-2">
          <Text key={id} text={value.text} />
        </p>
      );
    case 'heading_1':
      return <Heading_1 key={id}>{value.text[0].plain_text}</Heading_1>;
    case 'heading_2':
      return <Heading_2 key={id}>{value.text[0].plain_text}</Heading_2>;
    case 'heading_3':
      return <Heading_3 key={id}>{value.text[0].plain_text}</Heading_3>;
    case 'callout':
      return (
        <Callout key={id}>
          {value.icon.emoji} {value.text[0]?.plain_text}
        </Callout>
      );
    case 'code':
      return (
        <Code key={id} language={value.language}>
          {value.text[0].plain_text}
        </Code>
      );
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <div className="w-full my-4 rounded overflow-hidden shadow">
          <Image
            key={id}
            src={src}
            alt={caption}
            width={650}
            height={400}
            loading="eager"
            layout="responsive"
          />
        </div>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case 'quote':
      return (
        <blockquote>
          <Text text={value.text} />
        </blockquote>
      );
    case 'video':
      return (
        <div className="frame-container rounded overflow-hidden">
          <iframe
            src={value.external.url}
            title={value.external.caption}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    case 'embed':
      return (
        <div className="frame-container rounded overflow-hidden">
          <iframe
            src={value.url}
            title={value.caption[0]?.plain_text}
            frameBorder="0"
          />
        </div>
      );
    case 'divider':
      return <Divider key={id} />;
    default:
      return `Unsupported block (${
        type === 'unsupported' ? 'unsupported' : type
      })`;
  }
};

// @ts-ignore
const Pages = ({ pages, blocks, author }) => {
  return (
    <Layout
      facebook={author && author[0].properties.Social.multi_select[0].name}
      twitter={author && author[0].properties.Social.multi_select[1].name}
      linkedin={author && author[0].properties.Social.multi_select[2].name}
      github={author && author[0].properties.Social.multi_select[3].name}
      authorName={author && author[0].properties.Name.title[0].plain_text}
      src=""
    >
      <Head>
        <title>{pages && pages.properties.Name.title[0]?.plain_text}</title>
      </Head>

      <section className="max-w-3xl mx-auto mb-8">
        {pages && (
          <div key={pages.id} className="pb-2">
            <h1 className="text-4xl pb-4 font-semibold text-textPrimary dark:text-textPrimaryDark">
              {pages.properties.Name.title[0]?.plain_text}
            </h1>
            <div className="flex items-center py-2">
              <Image
                className="rounded-full h-6 w-6 mr-2"
                src={pages.properties.Author.created_by.avatar_url}
                width={12}
                height={12}
                alt="Author"
                layout="responsive"
              />
              <small>
                {pages.properties.Author.created_by.name}&nbsp;|&nbsp;
              </small>
              <small className="text-textTertiary dark:text-textTertiaryDark">
                {format(
                  new Date(pages.properties.Date.date.start),
                  'MMM dd, yyyy'
                )}
              </small>
            </div>
            <p className="text-md italic text-textSecondary dark:text-textSecondaryDark ">
              {pages.properties.Description.rich_text[0]?.plain_text}
            </p>
          </div>
        )}
      </section>

      <article className="max-w-3xl mx-auto">
        {blocks &&
          blocks.map((block: any) => {
            return <span key={block.id}>{BlockPage(block)}</span>;
          })}
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const db = await getDatabase(databaseId);
  return {
    paths: db.map((page) => ({
      params: {
        id: page.id,
        // @ts-ignore
        slug: page.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const database = await getDatabase(databaseId);
  const filter = database.filter(
    // @ts-ignore
    (page) => page.properties.Slug.rich_text[0]?.plain_text === slug
  );
  const author = database.slice(0, 1);
  const pages = await getPages(filter[0].id);
  const blocks = await getBlocks(filter[0].id);
  return {
    props: {
      pages,
      blocks,
      author,
    },
    revalidate: 10,
  };
};

export { Pages as default, BlockPage };
