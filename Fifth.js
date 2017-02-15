      function check(){

      var employee = [
      { name: 'sunny', age: 23, salary: 28000 ,dob:7/07/1993},
      { name: 'sahil', age: 25, salary: 800 ,dob:1/01/1991},
      { name: 'suraj', age: 42, salary: 15000 ,dob:25/12/2001},
      { name: 'ram', age: 70, salary: 25000 ,dob:9/08/2017},
  ];


      var count = Object.keys(employee).length;
      var increment = 1;
      console.log("fetch those records that have more than 5000 salaries")
      for (i = 0; i < count; i++) {
          if(employee[i].salary>5000){
            console.log("Records" + increment);
            console.log(employee[i].name);
            console.log(employee[i].age);
            console.log(employee[i].salary);
            console.log(employee[i].dob);
            increment++;
          }
      }
      var salary;
      console.log('fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.');
      for (i = 0; i < count; i++) {
          if(employee[i].salary<1000 && employee[i].age >20 ){
            console.log('Old salary is:-' + employee[i].salary);
            console.log(employee[i].name + ' salary increase by 5 times');
               salary = employee[i].salary * 5;
               console.log('Now salary is:-' + salary);
          }
      }
}
