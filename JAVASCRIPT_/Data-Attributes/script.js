const button = document.querySelectorAll('button')

// dataset has property to access data in html
// we can change it anytime
// console.log(button[0].dataset);


// see the change in html element when you click on any btn
button.forEach(btn => {
    btn.addEventListener('click',e => {
        const curClick = parseInt(btn.dataset.test);
        btn.dataset.test = curClick + 1;
    })
})

// dataset.test = data-test 
// it recongnizes 