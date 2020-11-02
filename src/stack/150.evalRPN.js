/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let num1,num2;

    tokens.forEach(token => {
        switch (token) {
            case '+':
                [num1,num2] = getOP(stack);
                stack.push(num1 + num2);
                break;
            case '-':
                [num1,num2] = getOP(stack);
                stack.push(num1 - num2);
                break;
            case '*':
                [num1,num2] = getOP(stack);
                stack.push(num1 * num2);
                break;
            case '/':
                [num1,num2] = getOP(stack);
                stack.push(parseInt(num1 / num2));
                break;
            default:
                stack.push(parseInt(token));
        }
    });

    return stack[0];
};

function getOP(stack) {
    const num2 = stack.pop();
    const num1 = stack.pop();

    return [num1,num2];
}

module.exports = evalRPN;