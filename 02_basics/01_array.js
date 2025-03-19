const arr = [1,2,3,4,5,6];

const heros = ['Shaktiman','Hatim'];

const newArr = new Array(1,2,3,5)


// methods

// console.log(arr.length)

arr.push(9)  //add element at last position
// console.log(arr)

arr.pop()   //remove element form the last
// console.log(arr)

// not use too mutch because it shift whole arr
arr.unshift(9)    //add new element at the start of the arr
// console.log(arr)

arr.shift()      //add an element at the start of the arr
// console.log(arr)


// console.log(arr.includes(3))
// console.log(arr.indexOf(3))



// slice, splice
//  slice() creates a duplicate of a specified section of an array in a new array object.  The original array is not modified.

// syntax : array.slice(begin, end)

let fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
// let citrus = fruits.slice(1, 3);
// let citrus = fruits.slice(1);
let citrus = fruits.slice(-2);

console.log(fruits)
// console.log(citrus);


// splice:  modifies an array by deleting, replacing, or inserting entries at a specified index. and its modified the origianal arr

// syntax: array.splice(start, deleteCount, item1, item2, ...)

let test1 = fruits.splice(1,2,1);
console.log(test1);

