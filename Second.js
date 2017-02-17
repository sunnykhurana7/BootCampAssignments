
   function  check(){

    // Declare variables
    var str,start,last,retval;

    str = document.getElementById('Str').value;
    start = 0;
    last = str.length-1;

     retval = true;
     while(start<=last){
       if(str[start]==str[last]){
         start++;
         last--;
       }else {
         retval = false;
         break;
       }

    //  str[start]==str[last] ? (start ++ , last --) : (retval = false, break);


     }

     retval ? alert('its a palindrome'): alert('its not a palindrome');


    //  if(retval){
    //    alert('its a palindrome');
    //  }else {
    //    alert('its not a palindrome');
    //  }
}
