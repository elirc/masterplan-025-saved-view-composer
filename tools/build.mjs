import { build } from 'esbuild';
await build({ entryPoints: ['src/main.jsx'], bundle: true, outfile: 'public/bundle.js', format: 'esm', sourcemap: true, jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' } });
console.log('Built public/bundle.js from src/main.jsx');
