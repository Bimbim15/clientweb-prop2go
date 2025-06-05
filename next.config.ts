/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Bimbim15/lolhuman/**",
      },
    ],
    domains: ["randomuser.me", 'github.com']
  },
};

export default nextConfig
