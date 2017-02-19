$(document).ready(function(){
  var count = 0;
  function insertElement(){
    count++;
    var newButton = $("<input type = 'button' class = 'newEle' >");
    newButton.attr('value','New Button - ' + count);
    $("body").append(newButton);
  }
  $("[type=button]").click(function(){
    insertElement();
  });
  $("body").on('click','input.newEle',function(){
    insertElement();
  })
});
