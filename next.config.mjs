import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = isGitHubPages && repoName ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    output: isGitHubPages ? 'export' : undefined,
    basePath,
    assetPrefix: basePath || undefined,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.shields.io',
            },
            {
                protocol: 'https',
                hostname: 'media1.tenor.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'fancyinnovations.com',
            },
            {
                protocol: 'https',
                hostname: 'docs.fancyinnovations.com',
            },
            {
                protocol: 'https',
                hostname: 'newdocs.fancyinnovations.com',
            }
        ],

        // REQUIRED ↓ (otherwise GitHub / GIFs often break)
        unoptimized: true,

        dangerouslyAllowSVG: true,

        // Must allow inline images or Next.js optimization breaks
        contentDispositionType: 'inline',

        // You had an extremely restrictive CSP blocking _next/image and external images
        contentSecurityPolicy:
            "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;",
    },
};

export default withMDX(config);
