const marvelheroes=["nim","cap","bw"]
const dc_heroes=["ds","flash"]
// marvelheroes.push(dc_heroes)
const heroes=[...marvelheroes,...dc_heroes]
console.log(heroes)
console.log(marvelheroes.flat(2));
console.log(Array.from("ayushmaan"))
console.log(Array.from({name:"ayushmaan"}))// interesting case
