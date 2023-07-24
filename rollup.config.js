import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json' assert { type: "json" };;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve({
      browser: true,
      main: true,
      jsnext: true,
    }),
    commonjs(),
    typescript(),
  ],
}