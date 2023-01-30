const arr = [1,2,3]

//* for each loop 
for(const i in arr){
    console.log(i);
}

//* loop
arr.forEach((num,idx) => {
    console.log(idx + " " + num)
})

//* modify
let newArr = arr.map(num =>{
    return num * 2
})
console.log(newArr);

//* filter
newArr = arr.filter(num => {
    return num > 1
})
console.log(newArr);

//* find = return only 1st num who satisfy condi
const n = arr.find(num => {
    return num > 1
})
console.log(n);

//* some = true if just one > 2
let isTrue = arr.some(num => {
    return num>2
})
console.log(isTrue);

//* all = true if all > 2
isTrue = arr.every(num => {
    return num>2
}) 
console.log(isTrue);