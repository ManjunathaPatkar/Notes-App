const fs = require('fs');
fs.writeFileSync('notes.txt','this fule was created using node.js\n');
fs.appendFileSync('notes.txt','now i am appending to this file using appendfile method of file system\n');
fs.appendFileSync('notes.txt','Actua;;y i can append as many times i want\n');
fs.appendFileSync('notes.txt','Each time i append new file wont be created and existing data wont be overridden\n');