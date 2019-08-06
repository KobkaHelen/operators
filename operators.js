const integers = [67, 79,4,79,56]
console.log(integers)

const window = {
    width: 80,
    height: 160,
    depth:50
}
console.log(window)

let arrayKey = 3

let objectKey = "depth"

let sum = integers[arrayKey] + window[objectKey]
console.log(sum)
sum = integers[1] + window.width
console.log(sum)

let sub = integers[arrayKey] - window[objectKey]
console.log(sub)

let div = integers[arrayKey] / window[objectKey]
console.log(div)

let mul = integers[arrayKey] * window[objectKey]
console.log(mul)

let v2 = integers[arrayKey] > window[objectKey]
console.log(v2)

let v3 = integers[arrayKey] < window[objectKey]
console.log(v3)

let v4 = integers[arrayKey] <= window[objectKey]
console.log(v4)
 
let v5 = integers[arrayKey] >= window[objectKey]
console.log(v5)

let v6 = integers[arrayKey] == window[objectKey]
console.log(v6)

let v7 = integers[arrayKey] != window[objectKey]
console.log(v7)

let user = { name: "John" };
let admin = user;
admin.name = 'Pete';
console.log(user.name);