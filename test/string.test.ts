describe('string', () => {
    test('5.longestPalindrome', () => {
        const longestPalindrome = require('../src/dynamicPlanning/5.longestPalindrome');

        //
        expect(longestPalindrome("babad")).toEqual("bab");
        expect(longestPalindrome("cbbd")).toEqual("bb");
        expect(longestPalindrome("aacabdkacaa")).toEqual("aca");

    });
});
