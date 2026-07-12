/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["localhost", "localhost:3000", "192.168.1.40", "192.168.1.40:3000", "192.168.1.37:3000"],
};

export default nextConfig;
