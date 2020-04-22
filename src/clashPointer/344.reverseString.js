/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right){
        swap(s,left,right);
        left++;
        right--;
    }
    return s;
};

function swap(array, source, target) {
    if (array[source] === array[target]) {
        return;
    }
    let temp = array[source];
    array[source] = array[target];
    array[target] = temp;
}

module.exports = reverseString;