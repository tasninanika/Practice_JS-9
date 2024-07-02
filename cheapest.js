const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000},
    {name: 'oppo', camera: 12, storage: '32gb', price: 16000},
    {name: 'iphone', camera: 12, storage: '32gb', price: 360000},
    {name: 'nokia', camera: 12, storage: '32gb', price: 6000},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);