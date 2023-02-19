//* 1. where to be added
const british = document.querySelector('.british-car-list');

//* 2. What to be added
const li = document.createElement('li');
li.innerText = 'Bentley'


//* add the child
british.appendChild(li)


//* add a section
const main = document.querySelector('.main');
const section = document.createElement('section');
const h2 = document.createElement('h2')
h2.innerText = 'France Car Brands';
section.appendChild(h2);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Peugeot';
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'Bugatti';
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'Alpine';
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = 'Renault';
ul.appendChild(li4)

const li5 = document.createElement('li');
li5.innerText = 'Citroen';
ul.appendChild(li5);

section.appendChild(ul);
main.appendChild(section)



const section2 = document.createElement('section');

//? easy way
section2.innerHTML = `
<h2>Italian Car Brands</h2>
<ul>
    <li>Lamborghini</li>
    <li>Ferrari</li>
    <li>Maserati</li>
    <li>Alfa Romeo</li>
    <li>Lancia</li>
</ul>
`;

main.appendChild(section2);
