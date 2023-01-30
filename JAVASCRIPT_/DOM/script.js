// //*) UNCOMMENT EACH POINT AND RUN

// //* 1) creating html element and append
// const element = document.createElement("span")
// element.innerText = "Append At last"
// document.body.appendChild(element)

//* 2) get element by id and Class
// const divEle = document.getElementById("div-id")
// console.log(divEle); // print Ele
// divEle.style.color = "red"

// const divWithClass = document.getElementsByClassName("div-class")
// console.log(divWithClass); // HTML collection
// divWithClass[2].style.color = "red"


// //? convert it to array and access
// const divWithClassArray = Array.from(divWithClass)
// divWithClassArray.forEach(element => {
//     element.style.color = "green"
// });

// //? Direct
// Array.from(divWithClass).forEach(currentItem => {
//     currentItem.style.color = "red"
// });

// //* Selet element QuerySelector ( CSS )
// const dataAttributeElement = document.querySelector('[data-test]') // to select one ele
// const divWithClasses = document.querySelectorAll(['.div-class']) // to select all with div-class name
// console.log(dataAttributeElement);
// divWithClasses.forEach(div =>  // dirct : as it's type is Node list
//     div.style.color = 'blue'
// );

// const input = document.querySelector("input")
// console.log(input);

// //* Event Listener
// const btn = document.getElementById("btn1");
// //? add => btn.addeventListener('event',function)
// function clicked() {
//     console.log("clicked");
// }
// btn.addEventListener("click", clicked);

// //? remove =>
// btn.removeEventListener('click',clicked)

// const input = document.getElementById("text");
// input.addEventListener("change", (e) => {
//     console.log("changed : ",e.target.value);
// });

// input.addEventListener("input", e => {
//     console.log(e.target.value);
// });


// //* Event Listener preventing defult beheviour
// const form = document.querySelector('[data-form]')
// console.log(form);
// form.addEventListener("submit",e =>{
//     e.preventDefault() // prevent the default work i.e submitting form
//     console.log("submitted form");
// })

//? Q) add a anchor tag to the html and when it is clicked prevent the 
// default and log something to the console
// const link = document.querySelector('[data-link]')
// link.addEventListener("click",e => {
//     e.preventDefault() // cleck prevented
//     console.log("privented Default"); 
// })

//* Resize event on window obj
// window.addEventListener("resize",()=> console.log("resize"))


//* This behavior with Arrow and normal function
// const button = document.getElementById('btn1');

// button.addEventListener('click',e =>{
//     console.log('Arrow this');
//     console.log(this); // this -> Window obj
//     // console.log(e.target);
//     // console.log(button);
// })

// button.addEventListener('click',function(e){
//     console.log('Function this');
//     console.log(this); // this -> button obj
// })

// Never use this : use direct obj name
