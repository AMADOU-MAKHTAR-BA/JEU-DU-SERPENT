let b = document.getElementsByClassName('bouton');
let bouton=([].slice.call(b)).slice(0);

import {jeuDuSerpent} from '/fonction /fonction.js';



      /***CRÉATION DU CANVAS***/
jeuDuSerpent.creationDuCanvas()

     /***CRÉATION DU SERPENT***/
jeuDuSerpent.creationSerpent();

/*****CRÉATION DES BOUTONS****/
jeuDuSerpent.creationBoutons();

/**"""" DÉPLACEMENT DU SERPENT ""**/
jeuDuSerpent.initDeplacementDuSerpent()

   /**** BOUTONS INTERACTIVES ****/
jeuDuSerpent.boutonsInteractives()

console.log('jeu du 🐍');
