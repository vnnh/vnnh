import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import livereload from "rollup-plugin-livereload";
import css from "rollup-plugin-css-only";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-analyzer";

const production = !process.env.ROLLUP_WATCH;

export default {
	input: "src/main.tsx",
	output: {
		sourcemap: !production,
		format: "iife",
		name: "app",
		file: "public/build/bundle.js",
	},
	plugins: [
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		css({ output: "bundle.css" }),
		resolve({ browser: true }),
		commonjs(),
		typescript({ sourceMap: !production, inlineSources: !production }),
		!production && livereload(),
		production && terser(),
		analyze({ summaryOnly: true }),
	],
	watch: {
		clearScreen: false,
	},
};
