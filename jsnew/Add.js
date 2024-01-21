const fs = require('fs');
const chack = require('chalk');

const addNote = function(title,body){

const file1 = loadNote();

// geting data is have or Note
let count = 0 ;
// to find dublicate or not
    file1.forEach(element => {
        if (element.title===title) {
            count++
        }
    });

    if(count===0){
     file1.push({
        title:title,
        body:body
     });
     saveNotes(file1);
     console.log(chack.green('your data is save'));
}else{
    console.log(chack.red('title is taken'));
}

}




const saveNotes = function(notes){

    let taking_notes= JSON.stringify(notes);
    
    fs.writeFileSync('Notes.json',taking_notes);

}
// ->



const loadNote=function(){
    try{
    const readfile= fs.readFileSync('Notes.json');
    const witefile = readfile.toString();
     return JSON.parse(witefile);
    }catch(e){
        return[];
    }
    
}
module.exports.addNote =addNote;