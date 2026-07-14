import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://praveen-builds.vercel.app",

  integrations: [sitemap()],
});