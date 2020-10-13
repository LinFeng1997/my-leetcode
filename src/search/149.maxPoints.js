/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 3) return points.length;

    let result = 2;
    points.forEach((point,i) => {

        let keys = [];
        let sameCount = 0;
        let max = 0;
        for (let j = 0;j< points.length;j++){
            if (i !== j) {
                const point2 = points[j];
                if (isSame(point, point2)) {
                    sameCount += 1;
                } else {
                    keys.push(getKey(point, point2));
                }
            }
        }

        let map = getMap(keys);
        map.forEach(value => {
            max = Math.max(max,value);
        });

        if (max === 0){
            result = points.length;
        } else {
            max += sameCount;
        }

        result = Math.max(result,max);
    });

    return result;
};

function isSame(p1,p2) {
    return p1[0] === p2[0] && p1[1] === p2[1];
}

function getKey(p1,p2) {
    const x0 = p1[0];
    const y0 = p1[1];
    const x1 = p2[0];
    const y1 = p2[1];
    const maxInt = 10000;

    if (x1 === x0) {
        const k = 'k';
        const b = x1;

        return `${k}#${b}`
    } else {
        const k = ((y1 - y0) % maxInt * maxInt) / (x1 - x0);
        const b = y0 - k * x0;

        return `${k}#${b}`;
    }
}

function getMap(arr, map = new Map()) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!map.has(item)) {
            map.set(item, 2); // 至少两个点
        } else {
            map.set(item, map.get(item) + 1);
        }
    }
    return map;
}

module.exports = maxPoints;