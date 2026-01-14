/**
 * Icon Generator Script
 * 
 * This script generates PWA icons from a source image.
 * 
 * To use this:
 * 1. Install sharp: npm install sharp --save-dev
 * 2. Place your source icon (icon.png) in the public/ directory
 * 3. Run: node scripts/generate-icons.js
 * 
 * Or manually create icons using an online tool like:
 * - https://www.pwabuilder.com/imageGenerator
 * - https://realfavicongenerator.net/
 */

const fs = require('fs')
const path = require('path')

// For now, create SVG placeholders that can be converted to PNG
const iconSizes = [192, 256, 384, 512]

const svgTemplate = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#7475EB"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.4}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">技</text>
</svg>
`

console.log('Creating placeholder icons...')

iconSizes.forEach(size => {
  const svg = svgTemplate(size)
  const filePath = path.join(__dirname, '..', 'public', `icon-${size}x${size}.png`)
  
  console.log(`Note: icon-${size}x${size}.png needs to be created manually or using a tool.`)
  console.log(`   You can use the SVG template or generate from a source image.`)
})

console.log('\nTo generate actual PNG icons:')
console.log('1. Use an online tool: https://www.pwabuilder.com/imageGenerator')
console.log('2. Or install sharp and update this script to convert SVG to PNG')
console.log('\nFor now, you can use a simple colored square as a placeholder.')
