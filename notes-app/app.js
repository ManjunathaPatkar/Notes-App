// const fs = require('fs');
// fs.writeFileSync('notes.txt','this fule was created using node.js\n');
// fs.appendFileSync('notes.txt','now i am appending to this file using appendfile method of file system\n');
// fs.appendFileSync('notes.txt','Actua;;y i can append as many times i want\n');
// fs.appendFileSync('notes.txt','Each time i append new file wont be created and existing data wont be overridden\n');
const a=require('./notes');
const fs=require('fs');
const yargs=require('yargs');
//customize args version from 1.0.0 to 1.1.0
yargs.version('1.1.0');
// const validator=require('validator');
const chalk=require('chalk');
console.log(a());
// console.log(validator.isEmail('g@gilom.'));
// console.log(validator.isURL('oglcom'));
console.log(chalk.green('success!!'));
// console.log(chalk.red('Failed'));
// console.log(chalk.yellow('processing'));
// console.log(chalk.red.bgCyanBright.bold('fail'));
// console.log(chalk.red.inverse.bgCyan('Lol'));
// console.log(process.argv[2]);
// fs.writeFileSync('notes.txt','Notes');
// const command=process.argv[2];
// console.log(yargs.argv);
// // fs.appendFileSync('notes.txt', '\n');
// if (command==='add'){
//     fs.appendFileSync('notes.txt',process.argv[3]);
//     fs.appendFileSync('notes.txt', '\n');
//     // console.log('adding note');
// }
// else if (command==='remove'){
//     console.log('removing node');
// }
//we want yargs to add,remove,list and read notes
//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function(){
        console.log('adding a new note')
    }
})
//remove command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler: function(){
        console.log('removing a note')
    }
})
//read command
yargs.command({
    command: 'read',
    describe: 'reading notes',
    handler: function(){
        console.log('reading note')
    }
})
//listing note
yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function(){
        console.log('lsting note')
    }
})
console.log(yargs.argv);