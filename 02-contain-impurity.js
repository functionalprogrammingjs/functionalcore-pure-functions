
// a veces si tenemos un side effect lo que podemos hacer es que en vez de que ese side effect contamine el scope global
// que sólo contamine un parte.
// Por ejemplo cuando encapsulamos una función dentro de otra función
/*
const  SomeAPI = {
    threshold: 13,
    isBelowThreshold: (x) => x <= SomeAPI.threshold,
}

let numbers = [];  // GLOBAL VAR

const insertSortedDesc = (num) => {
    SomeAPI.threshold = num;
    let idx = numbers.findIndex(SomeAPI.isBelowThreshold);
    idx = (idx === -1) ? numbers.length : idx;
    numbers.splice(idx,0,num);
}

insertSortedDesc(6);  // cada vez que pasamos por esta función nos modifica el objeto global numbers y además no nos está devolviendo nada
insertSortedDesc(3);
insertSortedDesc(4);
insertSortedDesc(1);
insertSortedDesc(8);

console.log(numbers);
*/
// ---------- solución envolver insertSortedDesc en otra función donde le pasemos numbers


const  SomeAPI = {
    threshold: 13,
    isBelowThreshold: (x) => x <= SomeAPI.threshold,
}

let numbers = [];  // GLOBAL VAR

const getSortedNums = (arr,num) => {

    const insertSortedDesc = (num) => {
        SomeAPI.threshold = num;
        let idx = numbers.findIndex(SomeAPI.isBelowThreshold);
        idx = (idx === -1) ? numbers.length : idx;
        numbers.splice(idx,0,num);
    }
    let numbers = arr.slice();
    insertSortedDesc(num);
    return numbers;
}


numbers = getSortedNums(numbers,6);
numbers = getSortedNums(numbers,3);
numbers = getSortedNums(numbers,4);
numbers = getSortedNums(numbers,1);
numbers = getSortedNums(numbers,8);

// INCLUSO ahora podemos sacar la función insertSortedDesc fuera de la otra y llamarla sólo desde getSDortedNUms
