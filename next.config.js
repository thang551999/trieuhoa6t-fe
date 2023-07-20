/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pravatar.cc"],
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
