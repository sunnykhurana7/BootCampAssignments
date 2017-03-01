var fs = require('fs');

// functon callback
function countfunction(callback){


  callback();
}


var contents = fs.readFile('./package.json',function(err,data){
  //
  // console.log('Data is:- ' + data.toString());

  

  countfunction(function(){


  var count = data.toString().split('\n').length-1;
  console.log('count' + count);

  });

});

// var lines = contents.toString().split('\n').length - 1;
console.log('hello');
// console.log('Total Number of Lines Are :->' + lines);
