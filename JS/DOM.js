// console.log('explore DOM')
// console.log(document)

//* getElementsByTagName()
// const li = document.getElementsByTagName('li');
        // let i = 0;
        // while (i < li.length) {
        //     li[i].style.color = 'red';
        //     console.log(li[i].innerText)
        //     i++;
        // }


//* getElementById()
document.getElementById('german-title').style.color = 'coral';
// console.log(document.getElementById('japanese-title').innerText)
document.getElementById('american-title').style.backgroundColor = 'lightblue';
document.getElementById('japanese-title').innerText = 'JDM cars';

//* getElementsByClassName()
const topBrands = document.getElementsByClassName('top-brand');
// for(let i = 0; i < topBrands.length; i++){
//     topBrands[i].style.backgroundColor = 'green'
//     topBrands[i].style.color = 'white'
//     topBrands[i].style.padding = '10px 10px'
// }

//* querySelectorAll()
const brands = (document.querySelectorAll('.top-brand'))
for(const brand of brands){
    brand.style.fontSize = '30px';
}

const usaCars = document.querySelectorAll('.usa li');
usaCars.forEach(usaCar => {
    // console.log(usaCar.innerText)
})

//* querySelector()
document.querySelector('.top-brand').style.color = 'white';
document.querySelector('.top-brand').style.fontWeight = '700';
document.querySelector('.top-brand').style.backgroundColor = 'black';
// document.querySelector('.usa #jeep').setAttribute('class', 'jeeeeeeeeeeeeeeeeeep')

//* getAttribute()
// console.log(document.querySelector('#jeep').getAttribute('id'))
// console.log(document.querySelector('#jeep').getAttribute('class'))

//* check the element's classes
// console.log(document.querySelector('#jeep').classList)

//* add class
const classes = document.querySelector('#jeep');
classes.classList.add('test4444444444')
// console.log(document.querySelector('#jeep').classList)

//* remove class
classes.classList.remove('test1')
// console.log(document.querySelector('#jeep').classList)

//* replace class
classes.classList.replace('test2', 'test5555555555555');
// console.log(document.getElementById('jeep'))

//* setAttribute()
classes.setAttribute('title', 'Best SUV in USA')

//* innerHTML
// console.log(document.getElementsByClassName('japan')[0].innerHTML = '<h1>DOM element can replace using innerHTML</h1>')

//* innerText
// console.log(document.getElementsByClassName('japan')[0].innerText)