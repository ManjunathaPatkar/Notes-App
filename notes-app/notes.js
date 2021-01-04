const fs=require('fs');
const getNotes=function(){
    return "Your notes...";
}
const addNotes=function(title,body){
    // console.log(title)
    // console.log(body)
    const notes=loadNotes();
    // console.log(notes)
    notes.push({
        title:title,
        body:body
    })
    savenotes(notes)

}
const loadNotes=function(){
    try{
         const data=fs.readFileSync('notes.json')
         const datajson=data.toString()
         return JSON.parse(datajson)
    }
    catch(err){
        return []
    }
}
const savenotes=function(notes){
    const newdata=JSON.stringify(notes)
    fs.writeFileSync('notes.json',newdata)
    }
module.exports={
    getNotes:getNotes,
    addNotes:addNotes
};