/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        const map = new Map();
        strs.forEach(str => {
            const key = getKey(str);

            if (map.has(key)) {
                map.set(key, map.get(key).concat([str]));
            } else {
                map.set(key, [str]);
            }
        });

        return Array.from(map.values());
    };

function getKey(str) {
    const arr = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
        arr[str[i].charCodeAt() - 97] += 1;
    }

    return arr.join('#');
}

// one: sort value as key
// two: 26 char order as key
module.exports = groupAnagrams;
