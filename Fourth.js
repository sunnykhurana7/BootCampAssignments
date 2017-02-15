
    function copytoanother(){

    var destination = {    };

      var source = {
        "name":"Sunny Khurana",
         "companyname":"To The New"
      }



      function copyparameters(destination,source){
        for(prop in source){
          destination[prop] = source[prop];
        }

          return destination;

      }

      console.log(copyparameters(destination,source));

}
