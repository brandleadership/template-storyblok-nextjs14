/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.storyblok.com',
                pathname: '/**',
            },
        ],
    },
    eslint: {
        // Disabling on production builds because we're running checks on PRs via GitHub Actions.
        ignoreDuringBuilds: true,
    },
    pageExtensions: [
        'tsx',
        // FIXME: Next.js has a bug which does not resolve not-found.page.tsx correctly
        // Instead, use `not-found.ts` as a workaround
        // "ts" is required to resolve `not-found.ts`
        // https://github.com/vercel/next.js/issues/65447
        'ts',
    ],
};

export default nextConfig;
