const shopping = [
    {name: 'Shoe', price: 2200, quantity: 2},
    {name: 'Shirt', price: 1200, quantity: 3},
    {name: 'pant', price: 1150, quantity: 3},
    {name: 'belt', price: 100, quantity: 1}
];

function totalCost(products){
    let total = 0;
    for(let i = 0; i < products.length; i++){  
        total += (products[i].price * products[i].quantity);
    }
    return total;
}

const expense = totalCost(shopping);
console.log('Total expense today',expense);