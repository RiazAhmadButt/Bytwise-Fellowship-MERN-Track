// Event Listerners 

//add Event Lister click

const button2 = document.querySelector('.btn-2');
function alertBtn() {
    alert("Using Event Listner");
}
button2.addEventListener('click', alertBtn);

// Mouseover 

const box3 = document.querySelector('.box-3');
function changeBg() {
    box3.style.backgroundColor = 'blue';
}
box3.addEventListener('mouseover', changeBg);
//add Event Lister click
function changeBgColor() {
    box3.style.backgroundColor = 'red';
}
box3.addEventListener('click', changeBgColor);

const revealBtn = document.querySelector('.reveal-btn');
const hidenContant = document.querySelector('.hident-contant');

function hide() {
    if (hidenContant.style.display === 'none') {
        hidenContant.style.display = 'block';
    } else {
        hidenContant.style.display = 'none';
    }
}

revealBtn.addEventListener('click', hide)