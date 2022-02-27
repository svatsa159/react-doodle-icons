import peerDepsExternal from "rollup-plugin-peer-deps-external";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import json from '@rollup/plugin-json';
import generateDeclarations from 'rollup-plugin-generate-declarations';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import externals from 'rollup-plugin-node-externals'


const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({browser: true}),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss(),
    json(),
    generateDeclarations(),
    nodePolyfills(),
    externals()
  ]
};