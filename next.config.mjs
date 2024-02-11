/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
  
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SERPAPI_API_KEY: process.env.SERPAPI_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    PINECONE_API_KEY: process.env.PINECONE_API_KEY,
    PINECONE_ENV: process.env.PINECONE_ENV,
    PINECONE_INDEX: process.env.PINECONE_INDEX,
  },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
};

export default nextConfig;
