import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // El sitio invirtió idiomas (inglés en "/", español en "/es"): los links
  // viejos a "/en" siguen vivos por WhatsApp — que aterricen en la raíz.
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
