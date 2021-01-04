const a={
    title:'gril in room 101',
    author:'chetan bhagath'
}
console.log(a)
const b=JSON.stringify(a);
console.log(b)
const fs=require('fs')
// fs.writeFileSync('a.txt', a)
fs.writeFileSync('a.json', b)
const data=JSON.parse(b);
console.log(data)
console.log(data.title)
const datareturned=fs.readFileSync('a.json')
console.log(datareturned.toString())