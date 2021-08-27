import json from "@rollup/plugin-json"; // 处理 json
import commonjs from "@rollup/plugin-commonjs"; // 支持 common.js
import { babel } from "@rollup/plugin-babel"; // 处理 es6
import { nodeResolve } from "@rollup/plugin-node-resolve"; // node_modules 第三方库定位插件
import typescript from "rollup-plugin-typescript2"; // 处理 typescript
import { terser } from "rollup-plugin-terser"; // 压缩

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
  plugins: [
    json(),
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    typescript(),
    // terser()
  ],
};
