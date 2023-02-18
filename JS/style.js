const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.backgroundColor = 'lightgray'    
    section.style.padding = '10px'    
    section.style.margin = '30px auto'    
    section.style.width = '1000px'    
    section.style.borderRadius = '10px'    
});

//* classList.add()
document.querySelector('.japan').classList.add('jdm-background');

//* classList.remove()
document.querySelector('.large-text').classList.remove('large-text');