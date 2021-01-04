//before manupilating
// { "name": "Andrew", "planet": "Earth", "age": 27 }
const fs =require('fs');
const a=fs.readFileSync('b.json')
const b=a.toString();
const c=JSON.parse(b)
console.log(c)
c.name='manja';
c.planet='pluto'
console.log(c)
const d=JSON.stringify(c)
fs.writeFileSync('b.json',d)
