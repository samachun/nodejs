 // array, ovject(변수에 함수을 담을수가 있다.)

 var f = function () {
     console.log(1 + 1);
     console.log(1 + 2);
 }
 //  console.log(f);
 //  f();
 var a = [f];
 a[0]();

 var o = {
     func: f
 }
 o.func();