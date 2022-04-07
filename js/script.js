
// valorizzo le fariabili con i nomi gli elementi che devo utilizzare
const btnGenera = document.querySelector('#genera');
const btnAnnulla = document.querySelector('#annulla');

const bigliettoArea = document.querySelector('section#biglietto');


// al click del btn genera mostro il bilgietto e genro la logica
btnGenera.addEventListener('click', function(){
  // rimuovo la classe con opacity:0
  bigliettoArea.classList.remove('sc-hide');

  // salvo nelle costanti il valori degli input e della select
  const nome = document.getElementById('nome').value;
  console.log(nome);
  const km = document.getElementById('km').value;
  console.log(km);
  const fascia = document.getElementById('fascia').value;
  console.log(fascia);


  // logica di calcolo del biglietto e del tipo di offerta
  let price = km * 0.21;
  let offerta = "Biglietto Standard";

  if(fascia === 'minorenne'){
    price *= .8;
    offerta = "Sconto minorenni";
  }else if(fascia === 'silver'){
    price *= .6;
    offerta = "Sconto Silver";
  }

  // stampo negli elementi tutto gli output
  document.getElementById('nomePasseggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('price').innerHTML = price.toFixed(2);

  // dati random fittizi
  document.getElementById('carrozza').innerHTML = Math.ceil(Math.random()*12);
  document.getElementById('CP').innerHTML = Math.floor(Math.random() * (1000000 - 100000 + 1) + 100000);


});


// al click di annula resetto e nascondo il biglietto
btnAnnulla.addEventListener('click', function(){
  // aggiungo la classe con opacity:0
  bigliettoArea.classList.add('sc-hide');

  // reset
  document.getElementById('nome').value = "";
  document.getElementById('km').value = "";
  document.getElementById('fascia').value = "maggiorenne";
});
