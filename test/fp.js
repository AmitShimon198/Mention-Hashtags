// First-Class Citizens -> can assigned/store function to/in variable 
const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet("Amit Shimon"));

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const operations = [add, subtract];

//some place else in the code
(function () {
    const [add, subtract] = operations;
    console.log(add(3, 2));
    console.log(subtract(3, 2));
})()

const operationsObj = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y
};

//some place else in the code
(function () {
    const { add, subtract } = operationsObj;
    console.log(add(3, 2));
    console.log(subtract(3, 2));
})()

//High order function.
(function () {
const timesTwo = x => x * 2;
const timesThree = x => x * 3;

const transformAndDisplay = (num, operationFn) => {
    console.log(operationFn(num));
};

transformAndDisplay(5, timesTwo);
transformAndDisplay(5, timesThree);
})()

//Function composition
(function () {
    function compose(firstFunction, secondFunction) {
        return function (value) {
            const intermediateValue = secondFunction(value);
            return firstFunction(intermediateValue);
        };
    }
    const add1 = x => x + 1;
    const double = x => x * 2;
    compose(add1, double)(2);
})();

//function factory
const multiplier = factor => {
    return x => x * factor;
};

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(4));
console.log(triple(4));