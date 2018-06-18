import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'main.js',
  output: {
    file: 'build.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    alias(
      {
        //'vue': 'node_modules/vue/dist/vue.esm.js',
        'vue': 'node_modules/vue/dist/vue.common.js',
        'n3': 'node_modules/N3-components/dist/index.js'
      }
    ),
    commonjs()
  ]
}
