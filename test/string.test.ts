describe('string', () => {
    test('6.convert', () => {
        const convert = require('../src/string/6.convert');

        //
        expect(convert('LEETCODEISHIRING',3)).toEqual('LCIRETOESIIGEDHN');
        expect(convert('LEETCODEISHIRING',4)).toEqual('LDREOEIIECIHNTSG');
    });
});
