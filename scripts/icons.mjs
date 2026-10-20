// Raster favicons from public/favicon.svg.
import sharp from 'sharp';
const svg = 'public/favicon.svg';
await sharp(svg, { density: 512 }).resize(32, 32).png().toFile('dist/favicon-32.png');
await sharp(svg, { density: 1024 }).resize(180, 180).flatten({ background: '#0c0d10' }).png().toFile('dist/apple-touch-icon.png');
console.log('favicons written');
