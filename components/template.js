import Prism from 'prismjs';
import { useEffect } from 'react';

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
					'text-md leading-relax text-textSecondary dark:text-textSecondaryDark',
					bold ? 'font-bold' : '',
					italic ? 'italic' : '',
					underline ? 'underline' : '',
					strikethrough ? 'line-through' : '',
					code ? 'bg-gray-200 py-1 px-2 rounded-sm text-sm font-mono dark:text-textSecondary ' : '',
				].join(' ')}
				style={color !== 'default' ? { color } : {}}
			>
				{text.link ? <a href={text.link.url} target='_blank' className='underline text-social dark:text-socialDark hover:opacity-60'>{text.content}</a> : text.content}
			</span>
		)
	})
)}

// Header component for annotations
export const Heading_1 = ({ children }) => {
	return <h1 className="text-4xl my-4 font-semibold text-textPrimary dark:text-textPrimaryDark"><br />{children}</h1>
}

export const Heading_2 = ({ children }) => {
	return <h2 className="text-3xl my-4 font-semibold text-textPrimary dark:text-textPrimaryDark"><br />{children}</h2>
}

export const Heading_3 = ({ children }) => {
	return <h3 className="text-2xl my-4 font-semibold text-textPrimary dark:text-textPrimaryDark"><br />{children}</h3>
}

// Code components for annotations
export const Code = ({ children }) => {
	
	useEffect(() => {
		Prism.highlightAll();
	}, [])

	return (
			<pre>
				<code className='language-javascript'>{children}</code>
			</pre>
	)
}