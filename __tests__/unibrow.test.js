'use strict';

const unibrow = require('../files/transforms/unibrow.js');
const Bitmap = require('../files/bitmap.js');

describe('unibrow test', () => {
  it('returns error if not BM file', () => {
    let test = new Bitmap('hello.js', unibrow);
    expect(test.type).toBeNull;
  });
});
