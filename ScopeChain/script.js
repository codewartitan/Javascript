var num1=5;

function a(){
    var num2=4;
    console.log(num2);
    console.log(num1);
    
   
    function b(){
        var num3 = 7;
        console.log('hi from functin a: '+num2);
    }
    b();
}
//console.log(num3)
a();
