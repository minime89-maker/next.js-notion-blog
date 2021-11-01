import * as Icon from 'react-feather'

const Footer = ({ facebook, twitter, linkedin, github, authorName }) => {
	console.log(authorName)
	return (
		<footer className='pt-20 pb-6'>
			<div className='flex items-center justify-center py-2 space-x-3'>
				<a href={facebook} target='_blank' rel='noopener' aria-label='Facebook'>
					<Icon.Facebook className='text-social dark:text-socialDark hover:opacity-75' size={26} />
				</a>
				<a href={twitter} target='_blank' rel='noopener' aria-label='Twitter'>
					<Icon.Twitter className='text-social dark:text-socialDark hover:opacity-75' size={26} />
				</a>
				<a href={linkedin} target='_blank' rel='noopener' aria-label='Linkedin'>
					<Icon.Linkedin className='text-social dark:text-socialDark hover:opacity-75' size={26} />
				</a>
				<a href={github} target='_blank' rel='noopener' aria-label='Github'>
					<Icon.GitHub className='text-social dark:text-socialDark hover:opacity-75' size={26} />
				</a>
			</div>
			<p className="text-center text-xs text-textTertiary dark:text-textTertiaryDark">Copyright © 2021. {authorName}.</p>
		</footer>
	)

}

export default Footer