const fs=require('fs');
const getNotes=function(){
    return "Your notes...";
}
const addNotes=function(title,body){
    // console.log(title)
    // console.log(body)
    const notes=loadNotes();
    const duplicate=notes.filter(function(note){
        return note.title===title
    })
    if (duplicate.length===0){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log('new note added')

    }
    else{
        console.log('note title taken')
    }
    // console.log(notes)
    

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
const removeNotes=function(title){
    // console.log(title);
    const data=loadNotes();
    const notestokeep=data.filter(function(note){
        if (note.title ===title){
            return false;
        }
        else{
            return true
        }
    })
    if (notestokeep.length ===data.length){
        console.log('no notes with',title,'found');
    }
    else{
        console.log('removed note with',title)}
    savenotes(notestokeep);
    // console.log("removed!!!")
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
};