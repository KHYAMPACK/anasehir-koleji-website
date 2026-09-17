import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root,
  },
  redirects: async () => [
    { source: "/kurumsal", destination: "/anasehir", permanent: false },
    { source: "/ortaokul", destination: "/okullarimiz#ortaokul", permanent: false },
    { source: "/yabanci-dil", destination: "/egitim-modeli#yabanci-diller", permanent: false },
    { source: "/sks", destination: "/kampus-yasami", permanent: false },
    { source: "/iletisim", destination: "/kayit-iletisim#bize-ulasin", permanent: false },
  ],
};

export default nextConfig;
