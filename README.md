# Notion Blog

This is a blog built with [Next.js](https://nextjs.org) using [Notion's API](https://developers.notion.com/) and [TailwindCSS](https://tailwdindcss.com).

<br>

## How to use
<hr>

To obtain a token and the database id please visit the [Notion Getting Started Guide](https://developers.notion.com/docs/getting-started).

Create a file called `.env.local` in the root of the project and add the following lines: 

```bash
NOTION_TOKEN=<your token>
NOTION_DATABASE_ID=<your database id>
````

Install dependencies

```bash
npm install
# or
yarn
```

Start the server with 

```bash
npm run dev
# or
yarn dev
```

Go to [http://localhost:3000](http://localhost:3000).

<br>

## Deploy on Vercel
<hr>

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/).


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fminime89-maker%2Fnext.js-notion-blog&env=NOTION_API_KEY,NOTION_DATABASE_ID&envDescription=Notion%20Api%20Key%20and%20Notion%20Database%20Id%20is%20required&envLink=https%3A%2F%2Fwww.notion.so%2Fmy-integrations&demo-title=Blog&demo-description=A%20blog%20example%20using%20Next.js%20and%20Notion%20api&demo-url=https%3A%2F%2Fnext-js-notion-blog.vercel.app%2F&demo-image=https%3A%2F%2Fuser-images.githubusercontent.com%2F77694499%2F139641140-b61b5d2a-cb9c-45ed-988f-f18eed400003.png)