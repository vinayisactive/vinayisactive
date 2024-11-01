/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dbs9ulw2r/image/upload/**',
          },
          {
            protocol: "https",
            hostname: "utfs.io",
            port: "",
            pathname: "/f/**", 
          }
        ],
      },
};

export default nextConfig;
