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
    outputFileTracingExcludes: {
        '*': [
            'node_modules/@swc/core-linux-x64-gnu',
            'node_modules/@swc/core-linux-x64-musl',
            'node_modules/@esbuild',
            'node_modules/sharp',
        ],
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
                        value: 'no-cache, no-store, must-revalidate',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig 