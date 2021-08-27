import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";

const pkg = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: pkg.unpkg,
      format: "umd",
      name: "rumble",
    },
  ],
  plugins: [typescript(), json()],
};
