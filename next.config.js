
module.exports = {
  output:'standalone',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st-images.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'st-staticimg.s3.ap-south-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'stocktutor.com'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org"
      },
      {
        protocol: "https",
        hostname: "freelogopng.com"
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'assets-netstorage.groww.in',
      },
      {
        protocol: 'https',
        hostname: 'd1csarkz8obe9u.cloudfront.net'
      }

    ],
  },

}
