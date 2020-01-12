/* 

every time we called countdown, we subtracted one from the previous num 

instead of manually calling countdown over and over, why not have countdown call itself, subtracting one from num each time? 


WARNING -> dont run this HAHHAHAHAA
https://goo.gl/uaGva6

*/
function countdown(num) {
  console.log(num);
  countdown(num - 1);
}

countdown(5);
// countdown(4);
// countdown(3);
// countdown(2);
//  countdown(1);
//  countdown(0);
//  countdown(-1);
//  countdown(-2);


