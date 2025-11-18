import sharp from 'sharp';
import fs from 'fs';

async function removeBackground() {
  try {
    const inputPath = 'src/assets/porfolio.png';
    const outputPath = 'src/assets/porfolio_no_bg.png';

    // Read the image
    const image = sharp(inputPath);

    // Get image metadata
    const metadata = await image.metadata();
    console.log('Image metadata:', metadata);

    // For PNG with transparency, we can try to remove black background
    // This is a simple approach - for better results, you'd need more sophisticated background removal
    await image
      .flatten({ background: { r: 0, g: 0, b: 0, alpha: 0 } }) // Make black transparent
      .png()
      .toFile(outputPath);

    console.log('Background removed successfully!');
    console.log('Output saved to:', outputPath);

  } catch (error) {
    console.error('Error removing background:', error);
  }
}

removeBackground();
