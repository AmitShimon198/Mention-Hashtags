function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateOrderItem(id) {
    return {
        id: id,
        totalPrice: generateRandomNumber(50, 200),
        priceAfterCoupon: generateRandomNumber(40, 150),
        priceBeforeMembership: generateRandomNumber(45, 175)
    };
}

function generateOrder(id) {
    const orderItemsCount = generateRandomNumber(1, 5);
    const orderItems = [];
    for (let i = 1; i <= orderItemsCount; i++) {
        orderItems.push(generateOrderItem(i));
    }

    return {
        id: id,
        orderItems: orderItems
    };
}

function generateSession(id) {
    const ordersCount = generateRandomNumber(1, 4);
    const orders = [];
    for (let i = 1; i <= ordersCount; i++) {
        orders.push(generateOrder(i));
    }

    return {
        id: id,
        orders: orders
    };
}

// Generate 5 sessions with random orders and order items
const sessionsList = [];
for (let i = 1; i <= 5; i++) {
    sessionsList.push(generateSession(i));
}
console.log(JSON.stringify(sessionsList, null, 2));

// const arr = []
// for (let index = 0; index < sessionsList.length; index++) {
//     const session = sessionsList[index];
//     for (let y = 0; y < session.orders.length; y++) {
//         const order = session.orders[y];
//         for (let x = 0; x < order.orderItems.length; x++) {
//             const item = order.orderItems[x];
//             arr.push(item);
//         }
//     }
// }
console.log('====================================');

console.log('====================================');
const arr = sessionsList.flatMap(session => session.orders.flatMap(orders => orders.orderItems));
arr.map(item => {
    item.modify = true;
    return true;
})
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     element.modify = true;
// }
console.log(JSON.stringify(sessionsList, null, 2));