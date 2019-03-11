var scoreOfJohn = 41;
var scoreOfNick = 41;

var pass = 51;

if(scoreOfJohn>=pass && scoreOfNick>=pass)
{console.log(' Both Students passed')}
else if(scoreOfJohn>=pass ||scoreOfNick>=pass  ){
    console.log('one student passed')
    if(scoreOfJohn>scoreOfNick){
        console.log('John has passed exam')
    }
    else{
        console.log('Nick has passed exam')
    }
}else{
    console.log('Both Students failed')
}
