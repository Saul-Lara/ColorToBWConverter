import Jimp from 'jimp';

const inputPath = './input.jpeg';
const outputPath = './output.jpg';

Jimp.read(inputPath)
  .then(image => {
    return image
      .greyscale()
      .writeAsync(outputPath)
      .then(() => {
        console.log(`Image converted to black and white and saved as ${outputPath}`);
      });
  })
  .catch(err => {
    console.error('Error processing the image:', err);
  });