const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")
// console.log(list);
let x = 0;
form.addEventListener('submit',e =>{
    e.preventDefault();

    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerText = input.value;

    // console.log(item);

    list.appendChild(item);

    item.addEventListener('click',()=>{
        list.removeChild(item);
    })
    input.value = '';
})

