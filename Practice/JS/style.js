const section = document.getElementsByTagName('section');
let i = 0;
while(i<section.length){
    section[i].style.backgroundColor = 'lightgray';
    section[i].style.width = '1000px';
    section[i].style.padding = '20px';
    section[i].style.margin = '20px auto';
    section[i].style.borderRadius = '10px';
    i++;
}

document.querySelector('.german').classList.add('german-bg')