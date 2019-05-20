'use strict';

/**
 * Sample Transformer (unibrow)
 * Would be called by Bitmap.transform('unibrow')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
const unibrow = bmp => {
  console.log('Transforming bitmap to having unibrow', bmp);

  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it
  if (bmp.type !== 'BM') {
    return 'This is not a BM file.';
  } else {
    //TODO: alter bmp to make it have unibrow ...
    console.log('Giving John a unibrow');
    for (let i = 10269; i < 10281; i++) bmp.buffer[i] = 80;
    for (let i = 10375; i < 10400; i++) bmp.buffer[i] = 20;
    for (let i = 10490; i < 10510; i++) bmp.buffer[i] = 20;
    for (let i = 10605; i < 10615; i++) bmp.buffer[i] = 20;
    for (let i = 10717; i < 10727; i++) bmp.buffer[i] = 20;
  }
};

module.exports = unibrow;
