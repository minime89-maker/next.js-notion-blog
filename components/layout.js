import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Layout = ({ children, home }) => {

	const {theme, setTheme} = useTheme()

	return (
		<div className="container mx-auto my-auto min-w-full min-h-screen bg-backgroundColor dark:bg-backgroundDark">
			<Head>
				<meta
					name='description'
					content="Create Blog never was easier"
				/>
				<meta
					property='og:title'
					content="Notion's Blog"
				/>
			</Head>

			<header className="flex justify-between items-center">
				{home ? (
					<>
						<nav className='flex items-start justify-between w-full relative mx-auto py-8 px-8  bg-backgroundColor dark:bg-backgroundDark '>
							<div className='text-left'>
								<div className='mb-6'>
									<Image src={'/profile_pic.png'} width="80" height="80" alt='Profile of the Author' className="rounded-full" />
								</div>
						
								<div className="text-left">
									<h1 className='text-3xl font-semibold text-gray-900 dark:text-textPrimaryDark'>Minja Popovic</h1>
									<h2 className='text-md mb-2'>Frontend Developer</h2>
									<p className='text-md max-w-xs italic text-textSecondary dark:text-textSecondaryDark'>Writing about JavaScript, React, Next.js and Tailwind</p>
								</div>
							</div>
							
							<button
								aria-label="Toggle Dark Mode"
								type="button"
								className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							>
								{theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>}
							</button>
						</nav>
					</>
				) :
					(
						<>
							<nav className='flex items-center justify-between w-full py-6 px-8'>
								<Link href="/">
									<a className="text-4xl font-bold post-link">
									Blog
									</a>
								</Link>
								<button
									aria-label="Toggle Dark Mode"
									type="button"
									className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'
									onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
								>
									{theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>}
								</button>
							</nav>
						</>
					)}
			</header>

			<main className="container mx-auto my-auto px-8 max-w-3xl">
			{children}
			{!home && (
				<div className="mt-10 mb-20">
					<Link href='/'>
						<a className='post-link text-3xl'>&larr;</a>
					</Link>
				</div>
					
			)}
			</main>

			

			<footer className='py-6'>
				<p className="text-center text-xs text-textTertiary dark:text-textTertiaryDark">Copyright Minja 2021. All rights reserved.</p>
			</footer>

		</div>
	)
}

export default Layout