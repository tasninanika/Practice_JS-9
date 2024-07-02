const names = ['anika', 'jarin', 'anika', 'tasnin', 'jarin'];

function duplicate(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueName = duplicate(names);
console.log(uniqueName);
