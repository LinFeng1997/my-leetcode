/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let left = 0;
    let right = s.length - 1;
    let arr = s.split('');

    while (left < right) {
        const leftVowel = isVowel(arr[left]);
        const rightVowel = isVowel(arr[right]);
        if (leftVowel && rightVowel) {
            swap(arr, left, right);
            left++;
            right--;
        }

        if (!leftVowel) {
            left++;
        }

        if (!rightVowel) {
            right--;
        }
    }
    return arr.join('');
};

function isVowel(char) {
    return /[aeiou]/i.test(char);
}

function swap(array, source, target) {
    if (array[source] === array[target]) {
        return;
    }
    let temp = array[source];
    array[source] = array[target];
    array[target] = temp;
    return array;
}

module.exports = reverseVowels;