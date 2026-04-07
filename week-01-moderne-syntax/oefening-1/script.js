// Herschrijf deze vier functies naar moderne syntax:

// 1. Arrow function
function berekenOppervlak(breedte, hoogte) {
  return breedte * hoogte;
}

// 2. Template literal & arrow function
function maakZin(naam, stad) {
  return 'Hallo, ik ben ' + naam + ' en ik woon in ' + stad;
}

// 3. For/of loop en arrow function
const brands = ['Nike', 'Adidas', 'Dior', 'New Balance'];

function showBrands(brands) {
  for (let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
  }
  return brands
}

// 4. querySelector (vervang getElementById)
const knop = document.getElementById('mijn-knop');
