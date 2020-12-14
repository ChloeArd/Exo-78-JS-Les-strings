let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " + "et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let positionI = monTexte.indexOf("i");
let position = document.getElementById("position");
position.innerHTML = "La premiere position de la lettre 'i' est " + positionI + ".";

let majuscule = monTexte.toUpperCase();
let chaineMaj = document.getElementById("chaineMaj");
chaineMaj.innerHTML = majuscule;

for (let i = 0; i < monTexte[i].indexOf("a"); i++) {
    alert("lettre a trouvé");
}





