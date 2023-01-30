let data = new Promise((resolve,reject)=>{
    setTimeout(() => { // complex code
        resolve({
            'name' : 'om',
            'rool no ' : 33245
        })
    },2000);
})


data.then((x)=>{
    console.log(x);
})




// fetch("https://dummy.restapiexample.com/api/v1/employees")
//     .then(res => console.log(res);)

// data.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// const fetch = require("node-fetch");

// console.log(fetch);


// const data = fetch("https://dog.ceo/api/breeds/image/random")

// const x = data.then((item)=>{
//     return item.json();
// })

// x.then((res)=>{
//     console.log(res);
// })

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json()) 
//     .then(data => console.log(data))


// let x = 3;
// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(x===0){
//             resolve('success');
//         }
//         else{
//             reject('error');
//         }
//     },200)
// })

// data.then((item)=> {
//     console.log('then block' , item);
// })
// data.catch((err)=>{
//     console.log('catch block ' , err);
// })
// data.finally(()=>{
//     console.log('final block ');
// })


// const fetch = require('node-fetch')

// async function hello(){
//     console.log(await (await fetch("https://dog.ceo/api/breeds/image/random")).json());
// }

// hello();