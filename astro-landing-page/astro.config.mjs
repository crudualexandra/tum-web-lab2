import { defineConfig } from "astro/config";

const repoName = "tum-web-lab2";
const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  site: isNetlify
    ? "https://magazintipografia.netlify.app"
    : "https://crudualexandra.github.io",
  base: isNetlify ? "/" : `/${repoName}/`,
  output: "static",
});