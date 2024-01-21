const fs = require('fs');
const chack = require('chalk');

const readf = function(title){
    const readfs = getData();
    const dataread = readfs.filter(function(e){
        if (e.title===title) {
            return e;
        }
    });
    if (dataread.length===0) {
        console.log('corrct you title');
    }else{
        console.log(chack.green('you data is->'));
        console.log(dataread[0].body);
    }

}

const getData = function(){
    try{
        let valueBuffer= fs.readFileSync('Notes.json');
        let valueString= valueBuffer.toString();
        return JSON.parse(valueString);
            }
        catch(e){
            return 'empty set '
        }
}
module.exports.readf=readf;