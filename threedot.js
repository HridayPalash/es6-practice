const age = [10, 12, 14, 16];
const age2 = [11, 13, 15, 17];
const age3 = [18, 20, 22, 24];
// procholito Method
// const allAges = age.concat(age2).concat([5]).concat(age3);

// using three dot method makes life easier
const allAges2 = [...age, ...age2, ...age3, ...[9]];
// console.log(allAges2);
const business = 1000;
const minister = 800;
const sochib = 400;
const takaPoisa = [1000, 800, 400];
const maximum = Math.max(business, minister, sochib);
// using three dot(...) method we can easily get the highest value from an array.
const takaPoisaMax=Math.max(...takaPoisa)
console.log(takaPoisaMax);
