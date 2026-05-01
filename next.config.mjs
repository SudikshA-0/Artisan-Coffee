const isGH = process.env.GITHUB_PAGES === "true";

export default {
  basePath: isGH ? "/Artisan-Coffee" : "",
  assetPrefix: isGH ? "/Artisan-Coffee/" : "",
  images: {
    unoptimized: true
  }
};