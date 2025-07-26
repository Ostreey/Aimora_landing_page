/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
        unoptimized: false,
    },
    trailingSlash: false,
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
}

module.exports = nextConfig 