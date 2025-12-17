
const nextConfig = {
  // 👇 REQUIRED to silence Turbopack in Next 16
  turbopack: {},

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };
    return config;
  },
};

export default nextConfig;
