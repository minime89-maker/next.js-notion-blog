import Prism from 'prismjs';

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
					italic ? 'italic' : '',
					underline ? 'underline' : '',
					strikethrough ? 'line-through' : '',
					code ? 'bg-gray-200 py-1 px-2 rounded-sm text-sm' : '',
				].join(' ')}
				style={color !== 'default' ? { color } : {}}
			>
				{text.link ? <a href={text.link.url} target='_blank' className='underline text-social dark:text-socialDark hover:opacity-60'>{text.content}</a> : text.content}
			</span>
		)
	})
)}

export const Heading_1 = ({ children }) => {
	return <h1 className="text-4xl my-4 font-semibold text-textPrimary leading-relax dark:text-textPrimaryDark">{children}</h1>
}

export const Heading_2 = ({ children }) => {
	return <h2 className="text-3xl my-4 font-semibold text-textPrimary leading-relax dark:text-textPrimaryDark">{children}</h2>
}

export const Heading_3 = ({ children }) => {
	return <h3 className="text-2xl my-4 font-semibold text-textPrimary leading-relax dark:text-textPrimaryDark">{children}</h3>
}

export const Code = ({ children }) => {
	const js = Prism.highlight(children, Prism.languages.javascript);
	return (
	<pre>
		<code className='bg-gray-300 py-1 px-2'>{js}</code>
	</pre>
	)
}