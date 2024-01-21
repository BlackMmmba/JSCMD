const fs = require('fs');
const chack = require('chalk');

const update = function (title,body ){
    let title1 = edit();
    let voi = -1;
    const foot = title1.filter(function(e,index){
        if (e.title===title) {
            voi=index;
            return e;
        }
    })
    foot.push(voi);
    
    if (voi===-1&&foot.length===1) {
        console.log(chack.red('title is not here'));
    }
    //console.log(foot.length);
    else {
         console.log(chack.green('data is updated'));
         updatedfrom(body,voi,title1,title);
    }
}

const updatedfrom = function(body,tit1,ts,title){
    
     ts[tit1].body=body;
      let datas = JSON.stringify(ts);
    fs.writeFileSync('Notes.json',datas);

}

const edit = function (){
    try{
    let valueBuffer= fs.readFileSync('Notes.json');
    let valueString= valueBuffer.toString();
    return JSON.parse(valueString);
        }
    catch(e){
        return 'empty set '
    }
}
module.exports.update=update;