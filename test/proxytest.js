
const result = new Date();
result.setDate(result.getDate() + 1);

const credentials = { token: 'ABC/333', expiration: result }
const target = {
    sensitiveData: 'some sensitive data',
    accessSensitiveData: function () {
        return this.sensitiveData;
    },
};

const handler = {
    get: function (target, prop) {
        if (prop === "accessSensitiveData") {
            console.log("Access control check...");
            if (new Date() <= credentials.expiration) {
                return target[prop];
                // return Reflect.get(target, prop);
            } else {
                throw new Error("Access denied");
            }
        }
        return target[prop];
    },
};

const proxy = new Proxy(target, handler);


try {
    console.log(proxy.accessSensitiveData());
} catch (error) {
    console.error(error.message);
}




// const target2 = {
//     add: function (a, b) {
//         return a + b;
//     },
// };

// const handler2 = {
//     get: function (target, prop) {
//         if (typeof target[prop] === "function") {
//             return function (...args) {
//                 console.log(`Calling method "${prop}" with arguments:`, args);
//                 return target[prop](...args);
//             };
//         }
//         return target[prop];
//     },
// };

// const proxy2 = new Proxy(target2, handler2);

// console.log(proxy2.add(2, 3));

// const target3 = {
//     expensiveOperation: function (input) {
//         console.log(`Performing expensive operation for ${input}`);
//         for (let i = 0; i < 10000000; i++) { }
//         return `Result for ${input}`;
//     },
// };

// const cache = {};

// const handler3 = {
//     get: function (target, prop) {
//         if (typeof target[prop] === "function") {
//             return function (input) {
//                 if (cache[input]) {
//                     console.log(`Cache hit for ${input}`);
//                     return cache[input];
//                 } else {
//                     const result = target[prop](input);
//                     cache[input] = result;
//                     return result;
//                 }
//             };
//         }
//         return target[prop];
//     },
// };

// const proxy3 = new Proxy(target3, handler3);

// console.log(proxy3.expensiveOperation("A")); // performing expensive operation for A
// console.log(proxy3.expensiveOperation("A")); // cache hit for A

// const target4 = {
//     value: 0,
//     increment: function () {
//         this.value++;
//     },
//     decrement: function () {
//         this.value--;
//     },
// };

// const history = [];
// let currentIndex = -1;

// const handler4 = {
//     get: function (target, prop) {
//         if (typeof target[prop] === "function") {
//             return function () {
//                 target[prop]();
//                 history.push({ method: prop, value: target.value });

//                 console.log({ history });

//                 currentIndex = history.length - 1;
//             };
//         }
//         return target[prop];
//     },
// };

// const proxy4 = new Proxy(target4, handler4);

// proxy4.increment();
// proxy4.increment();
// console.log(proxy4.value); // 2

// proxy4.decrement();
// console.log(proxy4.value); // 1

// // Undo
// history[currentIndex].value = proxy4.value;
// currentIndex--;
// console.log(proxy4.value); // 2

// // Redo
// currentIndex++;
// proxy4.value = history[currentIndex].value;
// console.log(proxy4.value); // 1

