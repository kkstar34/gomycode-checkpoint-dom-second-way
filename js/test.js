let tab   = [ 1, 4, 5, 6, 7];


// for (let i = 0; i < tab.length; i++) {
//     console.log(tab[i]);
// }

// for(i in tab) {
//     console.log(tab[i]);
// }

// for(x of tab) {
//     console.log(x);
// }

// forEach(), map(), reduce(), filter(), some(), every(),

// tab.forEach(function(elt){
//     console.log(elt);
// })

// tab.forEach((elt) => {
//     console.log(elt);
    
// })

let newTab ;
// newTab = tab.map((elt)=> {
//     return elt*2;
// })

// console.log(newTab);

// newTab = tab.reduce((acc, elt) => {
//     return acc * elt;
// })

// console.log(newTab);


newTab = tab.filter(elt => {
    return !(elt % 2 === 0);
})

console.log(newTab)




