var student = [
    {
    name:'John',
    score1:47,
    score2:46
    },
    {
        name:'Bob',
        score1:23,
        score2:24
        },
        {
            name:'Nick',
            score1:40,
            score2:35
            },
            {
                name:'Alex',
                score1:44,
                score2:45
                }
]

var score =[91,81,71,61,51];
var degree=['A','B','C','D','E'];

function calcScore(scr1,scr2){

    var sum = scr1+scr2;

    return sum;
}

function calcFinal(){

    for(var i=0; i<student.length;i++){
       student[i].sum = calcScore(student[i].score1,student[i].score2);
       
       if (student[i].sum>=51) {

        console.log(student[i].name+' Passed final exam');

        for(var x =0;x<score.length; x ++){
        if (student[i].sum>=score[x]) 
        {
            console.log('He has ' + student[i].sum+' points and he got diploma with degree '+degree[x]);  
            break;  
        }
        }
           
       }
    }
    
}

calcFinal();
