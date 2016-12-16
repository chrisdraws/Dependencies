"use strict"

let acorn = require('acorn'),
  walk = require('acorn/dist/walk'),
  fs = require('fs');


fs.readFile(process.argv[2],'utf8',function(err, results){
 let newValue,
  resultsObject = {},
  returnedValue = "This file contained no dependent modules.";

  if(err){
    console.error(err);
    console.log(returnedValue);
    return;
  } else {

    newValue = acorn.parse(results,{"allowHashBang":"true"});

    walk.simple(newValue,{

      VariableDeclarator: function(node){
        if(node.init.callee && node.init.callee.name === "require") {

         resultsObject[node.id.name] = node.init.arguments[0].value;
        }
      }
    })
    if(JSON.stringify(resultsObject, null, 2) !== "{}") {
        returnedValue = JSON.stringify(resultsObject, null, 2);
    }

    console.log(returnedValue);
    //newValue = newValue.body;
}


});
