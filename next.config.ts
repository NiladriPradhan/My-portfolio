import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: { resolve: { alias: any; }; }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };
    return config;
  },
};

export default nextConfig;
