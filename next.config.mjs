const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Artisan-Coffee" : "",
  assetPrefix: isProd ? "/Artisan-Coffee/" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;