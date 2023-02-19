//* childNodes() 
// const usa = document.querySelector('.usa').childNodes[3];
// const usa = document.querySelector('.usa').childNodes[3].childNodes[1];
// console.log(usa)

//* children() ---> returns htmlCollections
// const usa = document.querySelector('.usa');
// const usa = document.querySelector('.usa').children[1].childNodes;

// const usa = document.querySelector('.usa').children[1].children[3].nextSibling;

//! don't working
// const usa = document.querySelector('.usa').children[1].children[3].previousSibling;
// console.log(usa)

//* createElement();
const usa = document.querySelector('.usa').childNodes[3];
// const li = document.createElement('li');
// const li2 = document.createElement('li');
// li.innerText = 'This is new born li tag';
// li2.innerText = 'Second born li tag';
// usa.appendChild(li);
// usa.appendChild(li2)

//* parentNode
// console.log(usa.parentNode.parentNode.parentNode.parentNode)