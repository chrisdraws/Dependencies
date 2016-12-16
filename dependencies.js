"use strict"

let acorn = require('acorn'),
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

    newValue = acorn.parse(results,{"allowHashBang":"true"}).body;

    for (var key in newValue) {
      if (newValue.hasOwnProperty(key)) {

        //console.log(newValue[key]);
        //is this a variable declaration? or is it something else
        if(newValue[key].type === 'VariableDeclaration') {
          newValue[key].declarations.forEach(function(value){

            //console.log(key, newValue[key]);
            //does this have a callee attached to it and is that callee a require();

            if(value.init !== null && value.init.callee && value.init.callee.name ==="require"){

              //insert the value to the object
                resultsObject[value.id.name] = value.init.arguments[0].value;
            } else {
                //do nothing
            }
          });
        } else {
            // do nothing
        }
      }
    }
    if(JSON.stringify(resultsObject, null, 2) !== "{}") {
        returnedValue = JSON.stringify(resultsObject, null, 2);
    }
  }
    console.log(returnedValue);

});
