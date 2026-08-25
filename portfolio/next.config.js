/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Os posts são lidos do disco em tempo de build; nada de imagens remotas.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
