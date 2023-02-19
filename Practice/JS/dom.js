//* getElementsByTagName()
// const japaneseCars = document.getElementsByTagName('li');
// for (const car of japaneseCars) {
//     car.style.color = 'cyan'
// }

//* getElementById()
document.getElementById('title').style.textAlign = 'center';
document.getElementById('title').style.backgroundColor = 'gray';
document.getElementById('title').style.color = 'white';
document.getElementById('title').style.padding = '20px 0';


//* getElementsByClassName()
const topCars = document.getElementsByClassName('top');
for (let i = 0; i < topCars.length; i++) {
    topCars[i].style.fontSize = '20px';
}

//* querySelector()
document.querySelector('.top').style.color = 'violate'

//* querySelectorAll()
const secondCars = document.querySelectorAll('.second');
secondCars.forEach(car => {
    car.style.color = 'red'
});

//* innerText
document.getElementById('benz').innerText = 'Marcedes Benz';

//* appendChild
const usaList = document.getElementById('usa-list');
const li = document.createElement('li');
li.innerText = 'Dodge';
usaList.appendChild(li)


//* classlist.add()
const usa = document.getElementById('usa');
usa.classList.add('test')

//* classList()
// console.log(usa.classList) 

//* classList.remove()
usa.classList.remove('test')

//* classList.replace()
usa.classList.replace('test1', 'test100')
// console.log(usa.classList) 

//* setAttribute()
const german1 = document.querySelector('.german');
german1.setAttribute('title', 'this is setAttribute() example')