// Selecting Elements 
// querySelector 
const container = document.querySelector('div');

// styling elements

container.style.border = '4px solid black';
container.style.borderRadius = '20px';
container.style.width = '50%';
container.style.margin = 'auto';

// select by id 

const title = document.getElementById('main-heading');
title.style.color = 'red';
title.style.fontSize = '30px';
title.style.textAlign = "center";


// select element by using className 
const list = document.getElementsByClassName('list-items');

// select element by tag name 
// const list = document.getElementsByTagName('li');
// console.log(list)

// Query Selector All 

// const list = document.querySelectorAll('li');
// styling multiple elements by using class name
for (let i=0; i<=list.length; i++) {
    list[i].style.listStyle = 'none';
    list[i].style.padding = '10px';
    list[i].style.margin = '10px';
    list[i].style.color = 'white';
    list[i].style.fontSize = '20px';
    list[i].style.fontWeight = 'bolc';
    list[i].style.backgroundColor = 'gray';
};





