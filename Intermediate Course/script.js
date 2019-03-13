/*function PassExam(name, score) {

    const pass =71;
    if(score>=pass){
        console.log(name+' '+score +' '+'has passed the exam')
    }
    else{
        console.log(name+' '+score +' '+'has failed the exam')
    }
}

function calcScore(quizScore,essayScore){

    var score = quizScore+essayScore;
    return score;
}
PassExam('sameer',calcScore(40,20))


var arr = [
    'John',
    'Bob',
    'Mary',
    10,
    true,
    [1,2,3],
    function(name){
        return 'Hello' + name;
    }
]

console.log(arr[5][1])
*/
 
var N = Number(document.querySelector('#messageIn').value);
const check = document.querySelector('#check');


check.addEventListener('click',Palindrome);

function Palindrome(){
   let rem,temp,final=0;
   temp=N;
  // console.log(temp);
  while(N>0){
      rem=N%10;  
      console.log("rem"+rem)   ;
      N=parseInt(N/10);
      console.log("N divided by 10"+N);
      final = final*10+rem;
      console.log("final"+final);
     
  }
  if(final==temp)
				{
					window.alert("The inputed number is Palindrome");
				}
				else
				{
					window.alert("The inputted number is not palindrome");
				}
}