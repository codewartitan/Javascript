const simpleQuotes = [
{
    name:'Stephen King',
    quote:'Get busy living or get busy dying'
},
{
    name : 'John F.Kennedy',
    quote:'Those who dare to fial miserably can achieve greatly'
},
{
    name:'Abraham Lincoln',
    quote:'Im a success today because I had a friend who believed in me and I didnt have the heart to let him down.'

},
{
    name:'Leonardo Da Vinci',
    quote:'It had long since come my attention that people of accomplishment rarely sta back and let things happen to them'
},
{
    name:'Leo Tolstoy',
    quote:'If you want to be happy, be.'
}
]

const quoteBtn    = document.querySelector('#quoteBtn');
const quote       = document.querySelector('#quote');
const quoteAuthor  = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){

    let random = Math.floor(Math.random()*simpleQuotes.length)
  quote.innerHTML =simpleQuotes[random].quote;
  quoteAuthor.innerHTML = simpleQuotes[random].name;

}