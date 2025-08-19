import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = './public/images/raw'
const outputDir = './public/images/optimized'

fs.readdirSync(inputDir).forEach(file => {
  if (!file.endsWith('.png')) return

  const inputPath = path.join(inputDir, file)
  const outputPath = path.join(outputDir, file)

  sharp(inputPath)
    .resize({ width: 1200 }) // change size as needed
    .png({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`✅ Optimized ${file}`))
    .catch(err => console.error(`❌ Error with ${file}:`, err))
})