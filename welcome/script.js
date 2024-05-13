const btnEl = document.querySelector('button');
const spanEl = document.querySelector('h1 > span');

btnEl.onclick = function(){
    const name = prompt('Please Enter Your Name');
    spanEl.textContent = name;
}