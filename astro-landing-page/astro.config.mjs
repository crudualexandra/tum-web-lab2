import { defineConfig } from "astro/config";

const repoName = "tum-web-lab2";
const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  site: isNetlify
    ? "https://cosmic-croquembouche-9a4e5b.netlify.app"
    : "https://crudualexandra.github.io",
  base: isNetlify ? "/" : `/${repoName}/`,
  output: "static",
});