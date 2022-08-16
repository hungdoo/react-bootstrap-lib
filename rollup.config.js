// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import pkg from './package.json';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
    url(),
    typescript(),
    scss({
      output: './dist/css/style.css',
      failOnError: true,
      runtime: require('sass'),
      prefix: `@import './src/scss/custom.scss';`
    })
  ]
};
