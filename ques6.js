$(document).ready(function(){
  $("[type=button]").on('click',function(){
    $("div").replaceWith(function(){
      return $("<p>div HTML replaced with P Element!!!!!!!!!</p>");
    });
  });
});
