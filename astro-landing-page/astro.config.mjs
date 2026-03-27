import { defineConfig } from "astro/config";

const repoName = "tum-web-lab2"; // must be a string

export default defineConfig({
  site: "https://crudualexandra.github.io",
  base: `/${repoName}/`,
  output: "static",
});