

const orders = [
    {
        id: 1,
        customer: "Jhon",
        items: [
            { name: "Ноутбук", price: 50000, quantity: 1 },
            { name: "Мышь", price: 1500, quantity: 2 }
        ]
    },

    {
        id: 2,
        customer: "Alan",
        items: [
            { name: "Телефон", price: 30000, quantity: 1 },
            { name: "Чехол", price: 1000, quantity: 3 }
        ]
    },

    {
        id: 3,
        customer: "Jane",
        items: [
            { name: "Клавиатура", price: 2500, quantity: 1 },
            { name: "Монитор", price: 12000, quantity: 1 }
        ]
    }
];
let totalRevenue = 0;
let topCustomer = "";
let maxTotal = 0;

for (let i = 0; i < orders.length; i++) {
    let total = 0;
    for (let j = 0; j < orders[i].items.length; j++) {
        total += orders[i].items[j].price * orders[i].items[j].quantity;
    }
    console.log(`Заказ (${orders[i].customer}): ${total} `);
    totalRevenue += total;

    if (total > maxTotal) {
        maxTotal = total;
        topCustomer = orders[i].customer;
    }
}

console.log(`Общий доход магазина: ${totalRevenue}.`);
console.log(`Самый дорогой заказ у ${topCustomer}.`);
