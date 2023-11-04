import esbuild from "esbuild";
import buildConfig from "./build.config.mjs";

await esbuild.build(
  Object.assign(buildConfig, {
    entryPoints: ["./src/hello.ts"]
  })
);
