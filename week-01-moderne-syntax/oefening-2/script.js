// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #bericht
// Knop 2: voeg een <li> toe aan #lijst met een tekst
// Knop 3: wissel de klasse 'actief' op #bericht

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');

const bericht = document.querySelector('#bericht');
const lijst = document.querySelector('#lijst');


 btn1.addEventListener('click', () => {
    bericht.textContent = "Hoi";
 });
 
 btn2.addEventListener('click', () => {
    lijst.innerHTML = '<li>Hoi</li>';
 });

 btn3.addEventListener('click', () => {
    bericht.classList.toggle('actief');
 });


 