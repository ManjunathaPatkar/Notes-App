const a={
    title:'gril in room 101',
    author:'chetan bhagath'
}
console.log(a)
const b=JSON.stringify(a);
console.log(b)
const fs=require('fs')
// fs.writeFileSync('a.txt', a)
fs.writeFileSync('a.txt', b)