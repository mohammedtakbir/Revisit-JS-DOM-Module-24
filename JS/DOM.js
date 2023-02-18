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
    console.log(usaCar.innerText)
})

//* querySelector()
document.querySelector('.top-brand').style.color = 'powderblue';
document.querySelector('.usa #jeep').setAttribute('class', 'jeeeeeeeeeeeeeeeeeep')