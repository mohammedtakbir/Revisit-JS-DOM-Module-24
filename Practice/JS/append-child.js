const main = document.querySelector('.main');
const section3 = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = 'Italian car brands';
section3.appendChild(h2);

const ul2 = document.createElement('ul');

const li_1 = document.createElement('li');
li_1.innerText = 'Ferrari';
ul2.appendChild(li_1); 
const li_2 = document.createElement('li');
li_2.innerText = 'Lamborghini';
ul2.appendChild(li_2); 
const li_3 = document.createElement('li');
li_3.innerText = 'Maserati';
ul2.appendChild(li_3); 
const li_4 = document.createElement('li');
li_4.innerText = 'Fiat';
ul2.appendChild(li_4); 


section3.appendChild(ul2);


main.appendChild(section3)