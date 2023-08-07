const productName = 'apple';
let productPrice = 12;
let productQuantity = 5;
let resultCost;

resultCost = productPrice * productQuantity;
console.log(`
    Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} руб. 
    Всего было потрачено: ${resultCost} ₽
`);