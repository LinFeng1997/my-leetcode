// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
var findAnagrams = function (s, p) {
    let map = getCharMap(p);

    let left = 0;
    let right = 0;
    let matchCount = 0;
    let window = new Map();
    let rst = [];

    while (right < s.length) {
        let char = s[right];

        // 1. caculate match count
        if (map.has(char)) {
            window = getCharMap(char, window);

            if (map.get(char) === window.get(char)) {
                matchCount++;
            }
        }


        // 2. move right point
        right++;

        // 3. get result and reset match count
        while (map.size === matchCount) {
            if (right - left === p.length) {
                rst.push(left)
            }

            let char = s[left];
            if (map.has(char)) {
                window.set(char, window.get(char) - 1);
                if (window.get(char) === map.get(char) - 1) {
                    matchCount--;
                }
            }

            left++;
        }
    }

    return rst;
};

function getCharMap(str, map = new Map()) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }
    return map;
}

module.exports = findAnagrams;