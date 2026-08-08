import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const repositoryBasePath = "/tww-salesforce-implementation";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        basePath: repositoryBasePath,
        assetPrefix: repositoryBasePath,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
