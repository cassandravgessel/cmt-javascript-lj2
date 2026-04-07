// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event en maak een profielkaart aan
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const form = document.querySelector('#profiel-formulier');
const naamInput = document.querySelector('#naam');
const functieInput = document.querySelector('#functie');
const afdelingInput = document.querySelector('#afdeling');
const profielenLijst = document.querySelector('#profielen-lijst');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const naam = naamInput.value; 
    const functie = functieInput.value;
    const afdeling = afdelingInput.value;

     const profielkaart = `

        <div class="kaart">
            <h3>${naam}</h3>
            <p>${functie}</p>
            <p>${afdeling}</p>
         </div> `
         ;

    profielenLijst.innerHTML += profielkaart;

} );