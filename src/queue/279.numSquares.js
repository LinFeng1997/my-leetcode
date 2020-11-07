/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let queue = [];

    queue.unshift([n,0]);

    const visited = new Map();
    visited.set(n,true);

    while (queue.length) {
        const item = queue.shift();
        let [num,step] = item;

        if (num === 0) return step;

        for (let i = 1; i * i <= num; i++) {
            const rest = num - i * i;

            if (rest === 0) return step + 1;

            if (!visited.has(rest)) {
                queue.push([rest, step + 1]);
                visited.set(rest,true);
            }
        }
    }
};

module.exports = numSquares;