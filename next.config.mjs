/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  experimental: { 
    nftTracing: true 
  }
  // i18n: {
  //   locales: ["en", "ro"],
  //   defaultLocale: "en",
  //   localeDetection: true,
  // },
  // images: {
  //   loader: 'akamai',
  //   path: '/public/image',
  // },
};

export default nextConfig;
