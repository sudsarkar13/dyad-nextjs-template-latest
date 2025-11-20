import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Webpack configuration - this will force webpack usage over Turbopack
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your existing webpack rules
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }
    
    return config;
  },
};

export default nextConfig;
