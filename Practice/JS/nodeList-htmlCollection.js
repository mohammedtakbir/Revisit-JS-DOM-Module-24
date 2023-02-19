//* children, namedItem()
const japan = document.querySelector('.japan').children;
// console.log(japan[0]) //? using index
// console.log(japan[1].children.namedItem('honda')) //? using ID
// console.log(japan.namedItem()) //? using name
// console.log(japan.namedItem('top')) //? using class--- return null


//* childNodes
const german = document.querySelector('.german').childNodes;
// console.log(german)