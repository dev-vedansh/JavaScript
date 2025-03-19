const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,10]
// arr1.push(arr2)   // wrong way
// console.log(arr1) //[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]


let a = arr1.concat(arr2)   //better way

// console.log(a);    //[   1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]


let b = [...arr1,...arr2]    //best way

// console.log(b)



console.log(Array.isArray("Ved"));  //false
console.log(Array.from("ved"));   // [ 'v', 'e', 'd' ]
console.log(Array.from({name:"ved"})) // []


