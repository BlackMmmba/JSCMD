const yargs = require('yargs');
const fs = require('fs');
const util = require('./Add');
const re = require('./removes');
const Up =require('./Update');
const RF = require('./Readfiles');
yargs.command({
  command:"add",
  bulider:{
    title:{},
    body:{}
  },
  handler:function(argv){
    
    util.addNote(argv.title,argv.body);
       
  }
});

yargs.command({
  command:"Update",
  bulider:{
    title:{},
    body:{}
  },
  handler:function(argv){
    Up.update(argv.title,argv.body);
  }
});

yargs.command({
  command:"remove",
  bulider:{
    title:{}
  },
  handler:function(argv){
     re.remove(argv.title)
  }
});

yargs.command({
  command:"read",
  handler:function(argv){
    RF.readf(argv.title);
  }
});
//console.log(yargs.argv._[0]);

yargs.parse();
