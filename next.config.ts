/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();
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
    domains: ["randomuser.me", "github.com", "srv.prop2goapi.co.id"],
  },
  env: {
    API_URL: process.env.API_URL,
    API_URL_DOWN: process.env.API_URL_DOWN,
    SOCKET_URI: process.env.SOCKET_URI,
    PROV_KOTA: process.env.PROV_KOTA,
  },
};

export default nextConfig;
