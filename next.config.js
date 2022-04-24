const withPWA = require('next-pwa')

const production = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  images: {
    domains: [
      's3-us-west-2.amazonaws.com',
      'images.unsplash.com',
      'miro.medium.com',
      's3.us-west-2.amazonaws.com',
      'images.pexels.com',
      'i.imgur.com',
      'thumbs.gfycat.com',
    ],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: production ? false : true,
  },
})
