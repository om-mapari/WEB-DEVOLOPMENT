// //*) UNCOMMENT EACH POINT AND RUN

// //* 1) creating html element and append
// const element = document.createElement("span")
// element.innerText = "Append At last"
// document.body.appendChild(element)

// //* 2) get element by id and Class
// const divEle = document.getElementById("div-id")
// console.log(divEle); // print Ele
// divEle.style.color = "red" 

// const divWithClass = document.getElementsByClassName("div-class")
// console.log(divWithClass); // Array of element
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
// divWithClasses.forEach(div => { // its type is Node list
//     div.style.color = 'blue'
// });

// const input = document.querySelector("input")
// // console.log(input);

// //* Event Listener 
const btn = document.getElementById('btn1')
//? add => btn.addeventListener('event',function)
function clicked() {
    console.log('clicked');
}
btn.addEventListener('click',clicked)
//? remove => 
// btn.removeEventListener('click',clicked)
