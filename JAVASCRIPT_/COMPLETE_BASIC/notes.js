
//* 1) Way to print in JavaScript
// console.log("This will be on Console");
// alert("This is Alert");
// document.write("This Will be on Page")
// console.log("love JavaScript")

//* 2) JavaScript Variable
// //? variable
// var num1 = 4;
// var num2 = 5;
// var str = "sum";
// var result = true;
// console.log(str + " = " + num1 + num1 + " is "+ result);
// console.log(typeof num1);

// //? Objects
// var animal = {
//     name: "cow ",
//     legs: 4,
//     eyes: 2
// }
// console.log(animal);
// console.log(animal.name);
// console.log(animal["name"]);

// //? undefined variable
// var und; 
// var und2 = undefined;
// console.log(und2);

// var nu = null;
// console.log(nu);


//* 3) var vs Let vs const
//?           Scope              overwrite           redeclare
//? var       function Scoped    can   be overwrite  can be redeclare
//? let       Block Scoped       can   be overwrite  cant be redeclare
//? const     Block Scoped       can't be overwrite  cant be redeclare

//? Tips
//? Never use var
//? Always Use let and imagine it as cpp normal variables
//? use const when you dont need to overwrite value

//* 4) TWO TYPES OF DATATYPE 
//? Primitive data types : undefined, null, number, string, boolean, symbol
//? Reference data types : Arrays and Objects

//* 5) Typecasting
// var a=5,b="4"
// console.log(a+b);
// b = Number(b)
// console.log(a+b);

//* 6) Conditional-> Same as c++
// var age = 15;
// if(age>=18) console.log("you are adult")
// else console.log("you are kid")

//* 7) Function
// function avg(a,b){
//     return (a+b)/2;
// }
// var avg1 = avg(3,6);
// var avg2 = avg(3,5);
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

