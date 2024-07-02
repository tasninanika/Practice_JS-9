function ticketPrice(ticketq){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketq <= 100){
        const price = first100Rate * ticketq;
        return price;
    }
    else if(ticketq <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketq = ticketq - 100;
        const restTicketPrice = restTicketq * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketq = ticketq - 200;
        const restTicketPrice = restTicketq * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(220);
console.log('Price: ',price);