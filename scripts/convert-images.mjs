import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

const conversions = [
  { name: 'Hero_image', targetKB: 200, quality: 75 },
  { name: 'what_is_it', targetKB: 200, quality: 75 },
  { name: 'what_is_it_mobile', targetKB: 150, quality: 70 },
];

for (const { name, targetKB, quality } of conversions) {
  const input = path.join(imagesDir, `${name}.png`);
  const output = path.join(imagesDir, `${name}.webp`);

  let q = quality;
  let result;

  // Try progressively lower quality until we hit target size
  while (q >= 30) {
    result = await sharp(input)
      .webp({ quality: q })
      .toBuffer();

    const sizeKB = result.length / 1024;
    console.log(`${name}.webp @ quality=${q}: ${sizeKB.toFixed(0)}KB`);

    if (sizeKB <= targetKB) {
      break;
    }
    q -= 5;
  }

  await sharp(result).toFile(output);
  console.log(`  -> Saved ${output}\n`);
}

console.log('Done! Original PNGs kept as fallback.');
