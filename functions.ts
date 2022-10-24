function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 6));

const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(2, 3));

const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};

console.log(mult(5, 5));
//optional param
// if num3 is present then substruct it, else substract only num2
const sub1 = (num1: number, num2: number, num3?: number): number => num3 ? num1 - num2 - num3 : num1 - num2;
console.log(sub1(2, 3, -10));

//required param. if we don't pass value for c the default value 5 will be added
function add1(a: number, b: number, c = 5): number {
    return a + b + c;
}
console.log(add1(5, 6));
console.log(add1(5, 6, 10));

//rest params
function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(4, 5, ...numbers));
console.log(add2(4, 5, ...[1, 2, 3, 4, 5]));
console.log(add2(4, 5, 1, 2, 3, 4, 5));

//make sure always state return type


function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c"]);

console.log(concatResult);
console.log(concatString);
