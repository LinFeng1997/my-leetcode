/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length) {
        return false;
    }

    let rows = matrix.map(item => item[0]);
    let row = searchRow(rows,target);

    let col = searchCol(matrix[row],target);

    return col !== null;

};

function searchRow(arr,target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2)

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left - 1;
}

function searchCol(arr,target) {
    if (!arr || !arr.length) {
        return null;
    }
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2)

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return null;
}

module.exports = searchMatrix;