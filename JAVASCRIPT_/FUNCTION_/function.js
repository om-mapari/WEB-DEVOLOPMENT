//* 1) Function Expersion : JavaScript Treat Function as object
let add = function(num1,num2)
{
    return num1+num2;
}
console.log(typeof add);
let result = add(3,2);
console.log(result);


//* 2) Default parameter
function add(num1,num2,num3=1)
{
    console.log(num1,num2,num3);
    return num1+num2+num3;
}

let result = add(4,5);
console.log(result);


//* 3)  Arrow Function 
let greet = function(){
    console.log("hello world");
    return 1;
}
console.log(greet());

// () =>  a.k.a  function()
let greet2 = () => {
    console.log("hello world ");
    return 1;
}

// normal life
let sum = function(a,b){
    return a+b
}
console.log(sum(4,5));

// Mentoss life : if one line then we can write like this 
let sum2 = (a,b) => a+b
console.log(sum2(4,5));
