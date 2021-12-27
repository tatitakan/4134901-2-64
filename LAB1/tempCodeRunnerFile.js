const numbs = [10,20,15,5,2];
const numbs2 = numbs.map(multi2);
console.log(numbs2);

function multi2(value,index,array) {
    return value * 3;
}

const over15 = numbs2.filter(over15fn);
console.log(over15);

function over15fn(value) {
    return value > 15; 
}

let sum = numbs.reduce(addNumb)
console.log(sum);

function addNumb(total, value) {
    return total + value;
}

//check every value in array => true / false 
let over10 = numbs.every(over10fn);
console.log(over10);

function over10fn(value){
    return value > 10;
}

let someOver10 = numbs.some(over10fn);
console.log(someOver10);

let first = numbs.find(over10fn);
console.log(first);

let firstIndex = numbs.findIndex(over10fn);
console.log(firstIndex);

const alphabet = "ABCDEF";
let arrAlph = Array.from(alphabet);
console.log(arrAlph);