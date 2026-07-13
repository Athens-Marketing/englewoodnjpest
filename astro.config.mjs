import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://englewoodnjpest.com",
  trailingSlash: "always",
  build: { format: "directory" },
});
