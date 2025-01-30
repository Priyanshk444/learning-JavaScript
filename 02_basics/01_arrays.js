const nums = [0,1,2,3]
const arr = new Array(9,3,8,7)

console.log(nums);
// console.log(arr);

// nums.push(4)
// console.log(nums);
// nums.pop()
// console.log(nums);

// arr.unshift(2)
// console.log(arr);
// arr.shift()
// console.log(arr);

// console.log(arr.includes(8))
// console.log(arr.lastIndexOf(8))

const newArr =  arr.join()
console.log(newArr);

// Slice(value to remove from,value remove upto but don't include)
// = returns new array and original value remains unchanged. 
// Use when you need to extract a portion of an array without modifying it.


// Splice(value to delete from, number of value to delete) 
// = returns new array with deleted one and original value changed.
// Use when you need to add, remove, or replace elements within an array.