function woodCalculator(chairq, tableq, bedq){
    const perChair = 3;
    const perTable = 10;
    const perBed = 20;

    const chairWood = chairq * perChair;
    const tableWood = tableq * perTable;
    const bedWood = bedq * perBed;
    // console.log(chairq, tableq, bedq);

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(0, 0, 1);
console.log(totalWood);