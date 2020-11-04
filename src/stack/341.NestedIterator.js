function NestedInteger(val) {
    this.val = val;
    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    // @return {boolean}
    this.isInteger = function () {
        return Number.isInteger(val);
    };
    //Return the single integer that this NestedInteger holds, if it holds a single integer
    //Return null if this NestedInteger holds a nested list
    //@return {integer}
    this.getInteger = function () {
        if (this.isInteger()) {
            return this.val;
        } else {
            return null;
        }
    };
    // Return the nested list that this NestedInteger holds, if it holds a nested list
    // Return null if this NestedInteger holds a single integer
    // @return {NestedInteger[]}
    this.getList = function () {
        if (this.isInteger()) {
            return null;
        } else {
            return this.val;
        }
    };
};

const mapNestedInteger = (item) => {
    if (Array.isArray(item)) {
        return new NestedInteger(item.map(mapNestedInteger));
    }
    return new NestedInteger(item);
};

NestedInteger.mapNestedInteger = mapNestedInteger;

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.num = null;
    this.hasNextFlag = false;
    this.stack = [];
    this.stack.push(nestedList);
};
NestedIterator.prototype.next = function() {
    this.hasNextFlag = false;
    return this.num;
};
NestedIterator.prototype.hasNext = function() {
    if (!this.stack.length) return false;

    while (this.stack.length && !this.hasNextFlag) {
        let item = this.stack.pop();
        if (item.length) {
            let first = item.shift();
            this.stack.push(item);

            if (first.isInteger()) {
                this.num = first.getInteger();
                this.hasNextFlag = true;
            } else {
                this.stack.push(first.getList());
            }

        }
    }
    return this.hasNextFlag;
};
module.exports = NestedIterator;
module.exports.NestedInteger = NestedInteger;