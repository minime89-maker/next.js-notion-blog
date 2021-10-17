import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

export const Layout = ({ children }) => {
	return <div className="px-4 text-gray-800 flex flex-col flex-wrap items-center justify-around max-w-4xl pt-6 sm:w-full dark:bg-backgroundDark">{children}</div>

}

export const Footer = () => {
	return (
		<footer className='py-6 w-full text-center'>
			<div className="flex item-center justify-center">
				<a href='https://twitter.com' target='_blank'  aria-label='Twitter'>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C7A7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
				</a>
				<a href='https://facebook.com' target='_blank' aria-label='Facebook'>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C7A7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
				</a>
			</div>
			<p className='mt-2 text-textTertiary dark:text-textTertiaryDark'>© 2021 Ilya Volodarsky. All Rights Reserved.</p>
		</footer>
	)
}

// rich_text component for annotations
export const Text = ({ text }) => {
	{!text && null}
	return (text && text.map((value, id) => {
		const {
			annotations: { bold, italic, underline, strikethrough, code, color },
			text,
		} = value
		return (
			<span
				key={id}
				className={[
					'text-md leading-relax dark:text-textSecondaryDark',
					bold ? 'font-bold' : '',
					italic ? 'font-italic' : '',
					underline ? 'underline' : '',
					strikethrough ? 'line-through' : '',
					code ? 'text-red-800' : '',
				].join(' ')}
				style={color !== 'default' ? { color } : {}}
			>
				{text.link ? <a href={text.link.url} className='underline text-blue-800'>{text.content}</a> : text.content}
			</span>
		)
	})
)}

export const Heading_2 = ({ children }) => {
	return <span className="text-xl font-semibold text-textPrimary leading-relax dark:text-textPrimaryDark"><br />{children}</span>
}

export const Code = ({ children }) => {
	const js = Prism.highlight(children, Prism.languages.javascript);
	return (
	<pre>
		<code>{js}</code>
	</pre>
	)
}