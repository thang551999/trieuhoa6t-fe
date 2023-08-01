/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pravatar.cc", "trieuhoa.s3.ap-southeast-1.amazonaws.com"],
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
