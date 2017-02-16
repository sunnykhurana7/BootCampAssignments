
   function  check(){
    var str = document.getElementById('Str').value;
    var  start = 0;
    var last = str.length-1;

    var retval = true;
     while(start<=last){
       if(str[start]==str[last]){
         start++;
         last--;
       }else {

         retval = false;
         break;
       }
     }

     if(retval){
       alert('its a palindrom');
     }else {
       alert('its not a palindrome');
     }
}
