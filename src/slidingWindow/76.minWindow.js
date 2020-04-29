/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let rst = '';
    let left = 0;
    let right = 0;
    let map = getCharMap(t);
    let window = new Map();
    let matchCount = 0;

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
        while (matchCount === map.size) {
            if (!rst || rst.length > right - left) {
                rst = s.substring(left, right)
            }

            let char = s[left];
            if (map.has(char)) {
                window.set(char, window.get(char) - 1);

                if (map.get(char) === window.get(char) + 1) {
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

module.exports = minWindow;