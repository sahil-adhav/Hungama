/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['media-exp2.licdn.com', 'lh3.googleusercontent.com'],
  }

}

module.exports = nextConfig

//we are using images from google for displaying after login 
