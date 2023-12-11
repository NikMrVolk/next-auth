/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
        ],
    },
    compiler: {
        relay: {
            // This should match relay.config.js
            src: './',
            artifactDirectory: './__generated__',
            language: 'typescript',
            eagerEsModules: false,
        },
    },
}

module.exports = nextConfig
