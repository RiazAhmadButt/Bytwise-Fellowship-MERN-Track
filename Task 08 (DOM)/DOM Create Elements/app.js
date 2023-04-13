// body styling 
const bodyElement = document.body;
bodyElement.style.width = "100%";
bodyElement.style.margin = "auto";
bodyElement.style.backgroundColor = "red";

// container get and style 
const container = document.getElementById('container');
container.style.width = '50%';
container.style.border = '4px solid black';
container.style.backgroundColor = "blue";
container.style.borderRadius = '30px';
container.style.color = 'white';
container.style.margin = 'auto';

// create h1 

const title = document.createElement('h1');
title.textContent = "Title";
title.style.textAlign = 'center';

container.appendChild(title);
// create ul  
const list = document.createElement('ul');

function addList(text) {
    const listItems = document.createElement('li');
    listItems.textContent = text;
    listItems.style.backgroundColor = "gray";
    listItems.style.padding = "10px";
    listItems.style.margin = "10px";
    listItems.style.listStyle = "none";
    listItems.style.fontSize = "20px";
    listItems.style.color = "white";
    return list.appendChild(listItems);
}
addList("First Item")
addList("Second Item")
addList("Third Item")
addList("Fourth Item")
addList("Fifth Item")

container.appendChild(list);

// get section 

const section = document.getElementById('section');

section.style.borderRadius = "30px";
section.style.backgroundColor = "gray";
section.style.padding = "10px";
section.style.margin = "10px";
section.style.listStyle = "none";
section.style.fontSize = "20px";
section.style.color = "white";

// create h1 

const heading = document.createElement('h1');
heading.textContent = "DOM Create Elements";
section.appendChild(heading);

// create p element 

const para = document.createElement('p');

// add text 

para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam est, pariatur unde quam nobis hic voluptate quo debitis dicta placeat suscipit maxime quis iste amet error facere natus. Officiis!";
section.appendChild(para);

// Set Attribute Class 
const createClass = document.querySelector('h4');
createClass.setAttribute('class','h4-heading')
const headingH4 = document.getElementsByClassName('h4-heading')[0];
headingH4.style.color = "white";
headingH4.style.backgroundColor = "blue";
headingH4.style.margin = "20px";
headingH4.style.padding = "20px";
headingH4.style.borderRadius = "10px";


// Set Attribute ID 
const createId = document.querySelector('h3');
createId.setAttribute('id','h3-heading')
const headingH3 = document.getElementById('h3-heading')
headingH3.style.color = "white";
headingH3.style.backgroundColor = "blue";
headingH3.style.margin = "20px";
headingH3.style.padding = "20px";
headingH3.style.borderRadius = "10px";

// select all h1 tags and style 

const h1 = document.querySelectorAll('h1');

for(let i= 0; i<=h1.length; i++){
    h1[i].style.margin = '20px';
    h1[i].style.padding = '20px';
}