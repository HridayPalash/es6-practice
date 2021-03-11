// function doubleIt(num) {
//     return num * 2;
// }
const doubleIt=function myFun(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

//Es6 make function declaration esaier
const add = num => num * 2;
const addResult = add(20);
console.log(addResult);

// jokhon amra akadhik parameter use korbo tokhon first braket dibo
const doMath = (x, y) => x + y;
const doMathResult = doMath(50,50);
console.log(doMathResult);

// When you have to do many thing in a one function
const jotilMath = (x, y, z) => {
    const sum = x + y;
    const minus = x - y;
    const result = (sum - minus) * z;
    return result;
}
const output = jotilMath(10, 20, 40);
console.log(output);