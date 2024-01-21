const fs = require('fs');
const chake = require('chalk');

const remove = function(title){
    const remove = removenote();
    const filternote = remove.filter(function(e){
        if (e.title!==title) {
            return e
        }
    })
    if (remove.length>filternote.length) {
        remoeitem(filternote);
        console.log(chake.green('your data is change'));      
    }
    if (remove.length===filternote.length) {
        console.log(chake.red('please correct your title name'));
    }
  

}

const remoeitem= function(data){
     let datas = JSON.stringify(data);
     fs.writeFileSync('Notes.json',datas);
}

const removenote=function(){
    try{
    let valueBuffer= fs.readFileSync('Notes.json');
    let valueString= valueBuffer.toString();
    return JSON.parse(valueString);
        }
    catch(e){
        return 'empty set '
    }
}
module.exports.remove=remove;