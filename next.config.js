const withPWA = require('next-pwa');

module.exports = withPWA({
	images: {
		domains: ['s3-us-west-2.amazonaws.com','images.unsplash.com', 'miro.medium.com', 's3.us-west-2.amazonaws.com', 'images.pexels.com', 'i.imgur.com' ]
	},
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		},
	reactStrictMode: true,
})