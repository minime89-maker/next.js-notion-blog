export const Layout = ({ children }) => {
	return (
		<div className="flex flex-col flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">{children}</div>
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
					'text-lg',
					bold ? 'font-bold' : '',
					italic ? 'font-italic' : '',
					underline ? 'underline' : '',
					strikethrough ? 'line-through' : '',
					code ? 'text-blue-800' : '',
				].join(' ')}
				style={color !== 'default' ? { color } : {}}
			>
				{text.link ? <a href={text.link.url} className='underline text-purple-800'>{text.content}</a> : text.content}
			</span>
		)
	})
)}