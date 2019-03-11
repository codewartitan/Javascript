const sendBtn = document.querySelector('#SendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click',sendMsg)

function sendMsg(){
    let content = messageIn.value;
   //console.log(content);

   if(content===''){
       alert('input field is empty')
   }

   messageOut.innerHTML =content;
   messageIn.value='';
}

