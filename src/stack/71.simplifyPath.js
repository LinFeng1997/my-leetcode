/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
 const arr = path.split('/');

 let stack = [];
 arr.forEach(item => {
     if (item === '..') {
         stack.pop();
     } else if (item && item !== '.') {
         stack.push(item);
     }
 });

 return '/' + stack.filter(item => item).join('/')
};

module.exports = simplifyPath;