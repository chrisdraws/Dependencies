"use strict"

let acorn = require('acorn'),
  fs = require('fs'),
  newValue,
  resultsObject = {},
  returnedValue = "This file contained no dependent modules.";

fs.readFile(process.argv[2],'utf8',function(err, results){

    newValue = acorn.parse(results).body;

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

    console.log(returnedValue);

});
