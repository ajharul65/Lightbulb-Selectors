// Write your code here
const b1 = document.querySelector('#lightbulb1');
const b2 = document.querySelector('#lightbulb2');
const b3 = document.querySelector('#lightbulb3');
const h3 = document.querySelector('.subtitle');
let count = 0

b1.addEventListener('click', function(){
    h3.innerHTML = "You've clicked the lights "+ (count++) +" times"
    b1.classList.toggle('active')
})

b2.addEventListener('click', function(){
    h3.innerHTML = "You've clicked the lights "+ (count++) +" times"
    b2.classList.toggle('active')
})

b3.addEventListener('click', function(){
    h3.innerHTML = "You've clicked the lights "+ (count++) +" times"
    b3.classList.toggle('active')
})

