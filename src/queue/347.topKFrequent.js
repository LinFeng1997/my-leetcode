/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const PriorityQueue = require('./priorityQueue');
var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(num => {
       if (map.has(num)) {
           map.set(num,map.get(num) + 1)
       }  else {
           map.set(num,1)
       }
    });
    const queue = new PriorityQueue((a,b) => a.value - b.value > 0);

    map.forEach((value,key) => {
        queue.push({
            key,
            value
        })
    });

    const res = [];
    while (!queue.isEmpty() && k-->0) {
        const {key} = queue.pop();
        res.push(key);
    }
    return res;
};

module.exports = topKFrequent;