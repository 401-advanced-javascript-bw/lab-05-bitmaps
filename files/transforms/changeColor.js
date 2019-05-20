'use strict';

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
const changeColor = bmp => {
  console.log('Transforming bitmap into greyscale', bmp);

  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it
  if (bmp.type !== 'BM') {
    return 'This is not a BM file.';
  } else {
    //TODO: alter bmp to make the image greyscale ...
    console.log('Changing colors!');
    for (let i = 1000; i < bmp.buffer.length; i++) {
      bmp.buffer[i] = Math.random() * 10;
    }
  }
};

module.exports = changeColor;
