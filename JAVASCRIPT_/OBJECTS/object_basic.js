// Objects
//* 1) collenction of key : value 
let alien = {
    name: 'om',
    tech: 'Js'
}
// Access
console.log(typeof alien);
console.log(alien.name);
console.log(alien['name']);
let input = 'tech'
console.log(alien[input]); // for user input


//* 2) Complex object : object inside object
let alien2 = {
    name: 'om',
    tech: 'Js',
    laptop: {
        cpu: 'i3',
        ram: 8,
        brand: 'lenovo'
    }
}
// Access
console.log(alien2.laptop);
console.log(alien2.laptop.cpu);

// use ? if you are not sure if property exist
console.log(alien2.laptop?.precesser);
if(alien2.laptop?.precesser) console.log(alien2.laptop.precesser)
else console.log('not found');

// delete property
delete alien2.tech
console.log(alien2);

// Add property
alien2.college = 'PICT'
console.log(alien2);

// printing object keys
for (const i in alien2) {
    console.log(i);
}

// printing object values
for (const i in alien2) {
    console.log(alien2[i]);
}

for (const i in alien2.laptop) {
    console.log(i+" -> "+alien2.laptop[i]);
}


//* 3) Function Expersion : JavaScript Treat Function as object
let add = function(num1,num2)
{
    return num1+num2;
}
console.log(typeof add);
let result = add(3,2);
console.log(result);