const fs=require('fs');
const chalk=require('chalk');
const getNotes=()=>"Your notes...";

const addNotes=(title,body)=>{
    // console.log(title)
    // console.log(body)
    const notes=loadNotes();
    // const duplicate=notes.filter((note)=>note.title===title)
    const duplicate=notes.find((note)=>note.title===title)
    if (duplicate===undefined){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log(chalk.green('new note added'))

    }
    else{
        console.log(chalk.red('note title taken'))
    }
    // console.log(notes)
    

}
const loadNotes=()=>{
    try{
         const data=fs.readFileSync('notes.json')
         const datajson=data.toString()
         return JSON.parse(datajson)
    }
    catch(err){
        return []
    }
}
const savenotes=(notes)=>{
    const newdata=JSON.stringify(notes)
    fs.writeFileSync('notes.json',newdata)
    }
const removeNotes=(title)=>{
    // console.log(title);
    const data=loadNotes();
    const notestokeep=data.filter((note)=> {
        if (note.title ===title){
            return false;
        }
        else{
            return true
        }
    })
    if (notestokeep.length ===data.length){
        console.log(chalk.red.bgCyanBright('no notes with',title,'found'));
    }
    else{
        console.log(chalk.green('removed note with',title))}
    savenotes(notestokeep);
    // console.log("removed!!!")
}
const listNotes=()=>{
    const data=loadNotes();
    // console.log(data);
    console.log(chalk.white.bgCyan('your notes'))
    data.forEach((note)=>{
        console.log(chalk.inverse(note.title))
    })
}
const readNote=(title)=>{
    const data=loadNotes();
    const a=data.find((note)=>note.title===title)
    // console.log(a)
    if(a===undefined){
        console.log(chalk.red('no note with',title,'found'))
    }
    else{
        console.log(chalk.green("found",a.title,a.body))
    }
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
};