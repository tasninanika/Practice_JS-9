const shopping = [
    {name: 'Shoe', price: 2200},
    {name: 'Shirt', price: 1200},
    {name: 'pant', price: 1150},
    {name: 'belt', price: 100}
];

function totalCost(products){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i].price;
    }
    return total;
}

const expense = totalCost(shopping);
console.log('Total expense today',expense);