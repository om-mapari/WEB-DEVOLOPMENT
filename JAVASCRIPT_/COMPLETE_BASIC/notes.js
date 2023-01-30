
//* 1) Way to print in JavaScript
// console.log("This will be on Console");
// alert("This is Alert");
// document.write("This Will be on Page")
// console.log("love JavaScript")

//* 2) JavaScript Variable
//? variable
// const num1 = 4;
// const num2 = 5;
// const str = "sum";
// const result = true;
// console.log(str + " = " + num1 + num2 + " is "+ result);
// console.log(typeof num1);

//? Objects
// const animal = {
//     name: "cow ",
//     legs: 4,
//     eyes: 2
// }
// console.log(animal);
// console.log(animal.name);
// const n = 'name' // use when you want to access it as variable
// console.log(animal[n]);

//? undefined and null variable
//? 2. undefined = value is not define, dosent't exist
//? null = setting a value, empty value

//? Why use null ? 
//? if you ask amazon API if they have the xyz product then they will return null

// let und; 
// let und2 = undefined;
// console.log(und2);

// let nu = null;
// console.log(nu);


//* 3) var vs Let vs const
//?           Scope                          overwrite           redeclare
//? var       function Scoped fun(){}        can   be overwrite  can be redeclare
//? let       Block Scoped {} if{} for{}     can   be overwrite  cant be redeclare
//? const     Block Scoped                   can't be overwrite  cant be redeclare

//? Tips
//? Never use var
//? Always Use let and imagine it as cpp normal variables
//? use const when you dont need to overwrite value

//* 4) TWO TYPES OF DATATYPE 
//? Primitive data types : number, string, boolean, undefined, null,symbol
//? Reference data types : Arrays and Objects

//* 5) Typecasting
// var a=5,b="4"
// console.log(a+b);
// b = parseInt(b)
// console.log(a+b);

//* 6) Conditional-> Same as c++
// var age = 15;
// if(age>=18) console.log("you are adult")
// else console.log("you are kid")

//* 7) Function
// function avg(a,b){
//     return (a+b)/2;
// }
// const avg1 = avg(3,6);
// const avg2 = avg(3,5);
// console.log(avg1,avg2);

//* 8) Arrays and Loop
// //? For loop
var arr = [1,2,"bablu",4,true];
// console.log(arr)
// console.log(arr[0])
// console.log(arr[4])
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//? For Each loop : fre
// const arr = [1,2,"bablu",4,true];
// arr.forEach(function(i){
//     console.log(i);
// })
// arr.forEach(i => {
//     console.log(i);
// });

//? While loop 
// let j = 5
// while (j!=1) {
//     console.log(j);
//     j--;
// }