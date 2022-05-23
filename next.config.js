/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "platform-lookaside.fbsbx.com",
      "profile-images.xing.com",
      "firebasestorage.googleapis.com",
      "i.pinimg.com",
      "images.pexels.com",
      "images.squarespace-cdn.com",
      "i1.adis.ws",
      "epicphoto.de",
    ],
  },
};

module.exports = nextConfig;
