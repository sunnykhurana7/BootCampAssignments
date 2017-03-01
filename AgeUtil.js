function computeAge(answer){

  // compute here
  var array = [];

  // Date Of Birth
  array = answer.split("-");
  var day = array[0];
  var month = array[1];
  var year = array[2];

  // Date create
  var currentDate = new Date();
  var cDay = currentDate.getDate(); // return the current day
  var cMon = currentDate.getMonth()+1; // return the current month
  var cYear = currentDate.getFullYear();


  // for month


return cYear - year;

}

module.exports.computeAge = computeAge;
