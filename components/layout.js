import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

export const Layout = ({ children }) => {
	return <div className="mx-4 text-gray-800 flex flex-col flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">{children}</div>

}

export const Footer = () => {
	return (
		<footer className='mt-12'>
			<div className="flex item-center justify-center space-x-2">
				<box-icon name='twitter' type='logo' color='#2c7a7b' ></box-icon>
				<box-icon name='facebook-square' type='logo' color='#2c7a7b' ></box-icon>
				<box-icon name='discord' type='logo' color='#2c7a7b' ></box-icon>
				<box-icon name='dev-to' type='logo' color='#2c7a7b' ></box-icon>
				<box-icon name='medium-square' type='logo' color='#2c7a7b' ></box-icon>
				<box-icon name='instagram-alt' type='logo' color='#2c7a7b' ></box-icon>
				<box-icon name='linkedin-square' type='logo' color='#2c7a7b' ></box-icon>
			</div>
			<p className='mt-2 text-textTertiary'>© 2021 Ilya Volodarsky. All Rights Reserved.</p>
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
					'text-md leading-relax',
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
	return <span className="text-xl font-semibold text-gray-900 leading-relax"><br />{children}</span>
}

export const Code = ({ children }) => {
	const js = Prism.highlight(children, Prism.languages.javascript);
	return (
	<pre>
		<code>{js}</code>
	</pre>
	)
}