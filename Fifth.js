      function check(){


      // Declare variables
      var employee,count,increment,salary,arr,imc;

       employee = [
      { name: 'sunny', age: 23, salary: 28000 ,dob:7/07/1993},
      { name: 'sahil', age: 25, salary: 800 ,dob:1/01/1991},
      { name: 'suraj', age: 25, salary: 15000 ,dob:25/12/2001},
      { name: 'ram', age: 70, salary: 25000 ,dob:9/08/2017},
      { name: 'abc', age: 23, salary: 28000 ,dob:7/07/1993},
      { name: 'def', age: 25, salary: 800 ,dob:1/01/1991},
      { name: 'ghi', age: 42, salary: 15000 ,dob:25/12/2001},
      { name: 'jkl', age: 70, salary: 25000 ,dob:9/08/2017},
      { name: 'mno', age: 23, salary: 200 ,dob:7/07/1993},
      { name: 'spqr', age: 25, salary: 800 ,dob:1/01/1991},
      { name: 'hum', age: 42, salary: 1000 ,dob:25/12/2001},
      { name: 'pat', age: 70, salary: 25000 ,dob:9/08/2017}
  ];


       count = Object.keys(employee).length;
       increment = 1;
      console.log("fetch those records that have more than 5000 salaries")
       for(var i = 0; i < count; i++) {
          if(employee[i].salary>5000){
            console.log("Records" + increment);
            console.log(employee[i].name);
            console.log(employee[i].age);
            console.log(employee[i].salary);
            console.log(employee[i].dob);
            increment++;
          }
      }

      console.log('fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.');
      console.log('done');
      for (var  j = 0; j < count; j++) {
          if(employee[j].salary<1000 && employee[j].age >20 ){
            console.log('Old salary is:-' + employee[j].salary);
            salary = employee[j].salary * 5;
            console.log(employee[j].name + ' salary increase by 5 times');
               console.log('Now salary is:-' + salary);
          }
      }

      console.log('group employee on the basis of their age');

       arr = [];
      for( k  = 0 ;k<count;k++){
        arr.push(employee[k].age);
      }
      function compare(a,b){
        return a.age-b.age;
      }
      employee.sort(compare);

      imc = 1;
      for(var l = 0;l<count;l++){

          console.log('Record' + imc);
          console.log(employee[l].name);
          console.log(employee[l].age);

      imc++;
      }
}
