/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let result = 0;

    points.forEach((point, i) => {
        const map = new Map();
        const distances = [];

        points.forEach((item, j) => {
            if (i !== j) {
                const distance = getDistance(point, item);
                distances.push(distance);
            }
        });

        getMap(distances).forEach((value, key) => {
            if (value > 1) {
                result += value * (value - 1);
            }
        });
    });

    return result;
};

function getDistance(a, b) {
    return Math.pow(b[1] - a[1], 2) + Math.pow(b[0] - a[0], 2);
}

function getMap(arr, map = new Map()) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!map.has(item)) {
            map.set(item, 1);
        } else {
            map.set(item, map.get(item) + 1);
        }
    }
    return map;
}

module.exports = numberOfBoomerangs;

