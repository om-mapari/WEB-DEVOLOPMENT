//* Most Importent Method


// Map on object
const roommate2019 = [
    {
        name:'rohit',
        age:10
    },
    {
        name:'omkar',
        age:15
    },
    {
        name:'om',
        age:10
    }
]
const roommate2023 = roommate2019.map(friends=>{
    return {...friends,age:friends.age+4}
})
console.log(roommate2023);


// Filter
const names = ['om','rohit','jay','prasad']
const res = names.filter(name=>name.length>3)
console.log(res);

// .some()  to check exist
scores1 = [22,42,21,33]
scores2 = [22,42,21,52]
console.log(scores1.some(score => score === 22))
console.log(scores1.some(score => score > 50));
console.log(scores2.some(score => score < 50));

//* 9) Arrays Methods
let myarr = [1,2,3,4,5]
console.log(myarr); 
console.log(myarr.length);
let result

// pop =>  pop + return last &&  it change len of arr
myarr = [1,2,3,4,5]
result = myarr.pop(); 
console.log(myarr);
console.log(result);

// push =>  push back + return new len &&  it change original arr
myarr = [1,2,3,4,5]
myarr.push(12);  
console.log(myarr);

// shift => pop first + return first 
myarr = [9,2,3,4,5]
result = myarr.shift(); 
console.log(myarr);
console.log(result);

// unshift => push front + return new len
myarr.unshift(0); 
console.log(myarr); 

// slice() => make new arr
myarr = [1,2,3,4,5]
result = myarr.slice(1,3)
console.log(result);

// splice => myarr.splice(start, deletCount, replacement)
myarr = [1,2,3,4,5,6,7]
myarr.splice(2,0,"hi")
console.log(myarr);
myarr = [1,2,3,4,5,6,7]
myarr.splice(2,1,"hi")
console.log(myarr);

myarr = [1,2,3,4,5]
result = myarr.splice(1,2)
console.log(myarr);
console.log(result);

// toString() => return string
myarr = [1,2,3,4,5]
result = myarr.toString()
console.log(result);
console.log(typeof(result));

// .sort()
myarr = [1,2,3,4,5]
myarr.sort(); 
console.log(myarr); 

// .concat()
myarr = [1,2,3,4,5]
arr2 = [7,8,9]
arr3 = arr2.concat(myarr)
console.log(arr3);



//* 9) String Methods
let str = "Hello i am good boy "
let srt2 = "om"
let strArr = ['Kaushal','OmKar','Rohit','Om']

console.log(str.length);
console.log(strArr.join(" + "));
console.log(str.concat(srt2))


console.log(str.indexOf("am")); // return first occ of string in str
console.log(str.lastIndexOf("am")); // return last occ of string in str
console.log(str.slice(1,5));
console.log(str.replace("good","bad")); // replace first occ only


//* 10) Dates
let mydate = new Date();
console.log(mydate.getTime());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getMinutes());
console.log(mydate.getSeconds());
console.log(mydate.getDate());
console.log(mydate.getMonth());