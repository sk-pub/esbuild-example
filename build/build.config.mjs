export default {
  entryPoints: ["./src/hello.ts"],
  bundle: true,
  format: "esm",
  outdir: "./dist",
  target: "es2020",
  minify: true,
  treeShaking: true
};
