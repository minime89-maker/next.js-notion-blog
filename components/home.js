import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Template = ({ children, home }) => {

	const {theme, setTheme} = useTheme()

	return (
		<div className="container mx-auto my-auto">
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
						<nav className='flex items-center justify-between dark:bg-backgroundDark w-full p-6'>
							<Image src={'/profile_pic.png'} width="40" height="40" alt='Profile of the Author' className="rounded-full" />
							<div className="text-left pl-4 ">
								<h2 className='text-xl font-semibold text-gray-900 leading-relaxed dark:text-textPrimaryDark'>Ilya Volodarsky</h2>
								{/* <p className='text-xs text-textPrimary leading-relaxed dark:text-textSecondaryDark'>Founder @Segment</p>
            <p className='text-xs text-textSecondary leading-relaxed mb-3 dark:text-textSecondaryDark'>Angel Investor in Climate Tech & Healthcare</p> */}
							</div>
							<button
								aria-label="Toggle Dark Mode"
								type="button"
								className='order-last ml-24'
								//className="animate-spin"
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							>
								{theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>}
							</button>
						</nav>
					</>
				) :
					(
						<>
							<nav className='flex items-center justify-between dark:bg-backgroundDark w-full p-6'>
								<Link href="/">
									<a>
									<Image src={'/profile_pic.png'} width="40" height="40" alt='Profile of the Author' className="rounded-full" />
									</a>
								</Link>
								
								<div className="text-left pl-4 ">
									<h2 className='text-xl font-semibold text-gray-900 leading-relaxed dark:text-textPrimaryDark'>Ilya Volodarsky</h2>
									{/* <p className='text-xs text-textPrimary leading-relaxed dark:text-textSecondaryDark'>Founder @Segment</p>
            <p className='text-xs text-textSecondary leading-relaxed mb-3 dark:text-textSecondaryDark'>Angel Investor in Climate Tech & Healthcare</p> */}
								</div>
								<button
									aria-label="Toggle Dark Mode"
									type="button"
									className='order-last ml-24'
									//className="animate-spin"
									onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
								>
									{theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>}
								</button>
							</nav>
						</>
					)}
			</header>

			<main>{children}</main>

			{!home && (
				<div className='pt-8 pb-2'>
					<Link href='/'>
						<a className='bg-button p-2 rounded-md text-textButton font-semibold text-lg dark:bg-buttonDark dark:text-textSecondary'> Back to home</a>
					</Link>
				</div>
			)}

			<footer>
				<p className="text-center">Copyright</p>
			</footer>

		</div>
	)
}

export default Template