var util = require('./AgeUtil.js');

const readline = require('readline');
const r1 = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

r1.question(' Please Enter The Date in This format :-> dd-mm-yyyy ', answer => {
    console.log("your age is :-"  + util.computeAge(answer));
});
