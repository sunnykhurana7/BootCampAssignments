$(document).ready(function(){

  function click()
  {
      alert('demo');
  $.ajax({

    type:"GET",
    url:"new.xml",
    dataType:"xml",
    success:function(xml){


      $(xml).find('person').each(function(){

        $("#temp").append('<li>' + $(this).text()  + '</li>');


      });
    }

  });
}
});
