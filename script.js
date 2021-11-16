const h1 = document.querySelector('h1');
h1.innerText = 'Välkommen till spelet!'; 

const btn = document.querySelector('button');
btn.innerText = 'Submit your name'; 

btn.addEventListener('click', function() {  
    const inputValue = document.querySelector('input');
    const value = inputValue.value; 
    const p = document.getElementById('namn'); 
    namn.innerText = `Välkommen att spela: ${value}`;  
}); 

const btnSten = document.getElementById('sten'); 
btnSten.innerText = 'Sten'; 
const btnSax = document.getElementById('sax'); 
btnSax.innerText = 'Sax'; 
const btnPåse = document.getElementById('påse'); 
btnPåse.innerText = 'Påse'; 
const mittVal = document.getElementById('anv'); 
let resultat = document.getElementById('resultat'); 
let ställningUsr = document.getElementById('ställning-usr'); 
let ställningCmp = document.getElementById('ställning-cmp'); 
let cmpScore = 0; 
let usrScore = 0; 
let displayWinner = document.getElementById('display'); 

btnSten.addEventListener('click', function(){
    mittVal.innerText = 'Ditt val: Sten'; 
    datorRandom(); 
    if (dator === 'Datorns val: Sten') {
        resultat.innerText = 'Oavgjort'; 
    }
    if (dator === 'Datorns val: Påse') {
        resultat.innerText = 'U lose'; 
        cmpScore++; 
        ställningCmp.innerText = `Datorns poäng: ${cmpScore}`; 
        
    }
    if (dator === 'Datorns val: Sax') {
        resultat.innerText = 'U win'; 
        usrScore++;
        ställningUsr.innerText = `Din poäng: ${usrScore}`; 
    }
    förstTillTre();
});

btnSax.addEventListener('click', function(){
    console.log('du valde sax'); 
    mittVal.innerText = 'Ditt val: Sax';
    datorRandom(); 
    if (dator === ' Datorns val: Sax') {
        resultat.innerText = 'Oavgjort'; 
    }
    if (dator === 'Datorns val: Sten') {
        resultat.innerText = 'U lose'; 
        cmpScore++;  
        ställningCmp.innerText = `Datorns poäng: ${cmpScore}`; 
    }
    if (dator === 'Datorns val: Påse') {
        resultat.innerText = 'U win'; 
        usrScore++; 
        ställningUsr.innerText = `Din poäng: ${usrScore}`; 
    }
    förstTillTre();
});

btnPåse.addEventListener('click', function(){
    console.log('du valde påse'); 
    mittVal.innerText = 'Ditt val: Påse';
    datorRandom(); 
    if (dator === 'Datorns val: Påse') {
        resultat.innerText = 'Oavgjort'; 
    }
    if (dator === 'Datorns val: Sax') {
        resultat.innerText = 'U lose'; 
        cmpScore++; 
        ställningCmp.innerText = `Datorns poäng: ${cmpScore}`; 
    }
    if (dator === 'Datorns val: Sten') {
        resultat.innerText = 'U win'; 
        usrScore++; 
        ställningUsr.innerText = `Din poäng: ${usrScore}`; 
    }
    förstTillTre(); 
}); 

let datorVal = document.getElementById('dator'); 
  
function datorRandom() {
    const random = Math.floor(Math.random()*3);
    console.log(random); 

    if (random === 1) {
        dator = 'Datorns val: Sten'; 
    } 
    if (random === 2) {
        dator = 'Datorns val: Sax'; 
    }
    if (random === 3) {
       dator = 'Datorns val: Påse'; 
    }
    datorVal.innerText = dator; 
}

function förstTillTre() {
    if (cmpScore === 3) {
        displayWinner.innerText = 'Datorn vinner!';
        cmpScore = 0; 
        usrScore = 0; 
    } 
    if (usrScore === 3) {
        displayWinner.innerText = 'Du vinner!';
        cmpScore = 0;
        usrScore = 0; 
    }
}









