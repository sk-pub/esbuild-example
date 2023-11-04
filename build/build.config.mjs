export default {
  entryPoints: [], // Different for `npm build` and `npm start`
  bundle: true,
  format: "esm",
  outdir: "./dist",
  target: "es2020",
  minify: true,
  treeShaking: true
};
