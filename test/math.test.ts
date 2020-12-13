describe('math', () => {
  test('7.reverse', () => {
    const reverse = require('../src/math/7.reverse');

    //
    expect(reverse(123)).toEqual(321);
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(120)).toEqual(21);
    expect(reverse(1534236469)).toEqual(0);
  });
});
