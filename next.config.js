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
    async headers() {
        return [
            {
                source: '/apk/:path*',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/vnd.android.package-archive',
                    },
                    {
                        key: 'Content-Disposition',
                        value: 'attachment',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig 