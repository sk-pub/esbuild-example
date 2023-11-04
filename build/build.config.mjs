export default {
  entryPoints: ["./src/index.ts"],
  bundle: true,
  sourcemap: true,
  format: "esm",
  outdir: "./dist",
  target: "es2020",
  minify: true,
  treeShaking: true,
  plugins: [],
};