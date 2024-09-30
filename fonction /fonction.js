


var  divConteneur , cnv , divScore , ctx , deplacerX , deplacerY ,serpentX , serpentY , serpentL , serpentH , deplacementUnitaire , divPause , boutonPause , boutonReplay , imgPause , imgReplay , cœurY , cœurX , pause , initScore , divScoreFontSize , url1 , audioGagnant , audioPerdant


divScoreFontSize = '30px'
initScore = 68;
pause = false;

deplacerX = 0;
deplacerY = 0;

const couleursSombresVariees = [
"#8B0000", // Dark Red
"#A52A2A", // Brown
"#800000", // Maroon
"#B22222", // Firebrick
"#8B4513", // SaddleBrown
"#2F4F4F", // Dark Slate Gray
"#00008B", // Dark Blue
"#000080", // Navy
"#191970", // Midnight Blue
"#006400", // Dark Green
"#556B2F", // Dark Olive Green
"#8B008B", // Dark Magenta
"#4B0082", // Indigo
"#483D8B", // Dark Slate Blue
"#2E8B57", // Sea Green
"#6B8E23", // Olive Drab
"#808000", // Olive
"#8B0000", // Dark Red
"#4682B4", // Steel Blue
"#5F9EA0", // Cadet Blue
"#7B68EE", // Medium Slate Blue
"#6A5ACD", // Slate Blue
"#8B4513", // Saddle Brown
"#7F0000", // Dark Red
"#8B008B", // Dark Magenta
"#483D8B", // Dark Slate Blue
"#2F4F4F", // Dark Slate Gray
"#228B22", // Forest Green
"#800080", // Purple
"#4B0082", // Indigo
"#6B8E23", // Olive Drab
"#696969" // Dim Gray
];

// Afficher le tableau des couleurs hexadécimales dans la console
//console.log(couleursSombresVariees);


var div1 , div2 , div3 , div4 , btn1 , btn2 , btn3 , btn4 , img1 , img2 , img3 , img4 , boutons , btn1Top , btn1Left 


             
const cnvWidth  = 330;
const cnvHeight = 374; 
const cnvBorder = 'double 0px white';
const divScoreColor = 'white';
const divConteneurBgColor = 'red';
const divConteneurOpacite = '0.8';
const cnvBgColor = '#000000';
const cnvMargin =  '10px 10px 10px 10px';
      deplacerX = 0;
      deplacerY = 0;
    /***PROPRIÉTÉS DU SERPENT***/
 serpentL = 22;
 serpentH = 22;
 
        serpentX =Math.round(Math.random()*(cnvWidth - serpentL)); 
        serpentY =Math.round(Math.random()*(cnvHeight - serpentH));
      
        // Générer des positions aléatoires pour le cœur
cœurX = Math.random() * (cnvWidth - 30) + 15; // Assure que le cœur reste dans les bords du canevas
cœurY = Math.random() * (cnvHeight - 30) +20; // Assure que le cœur reste dans les bords du canevas

url1 = '/IMAGES 🐍 SERPENTS /SERPENT1.jpeg';



export const jeuDuSerpent ={
  
  
  
  
debutDujeu : () => {


      /***CRÉATION DU CANVAS***/
jeuDuSerpent.creationDuCanvas()


     /***CRÉATION DU SERPENT***/
jeuDuSerpent.creationSerpent();

/*****CRÉATION DES BOUTONS****/
jeuDuSerpent.creationBoutons();


/**"""" DÉPLACEMENT DU SERPENT ""**/
jeuDuSerpent.initDeplacementDuSerpent();


   /**** BOUTONS INTERACTIVES ****/
jeuDuSerpent.boutonsInteractives();


/******GESTION DU PAUSE ET REPLAY******/
jeuDuSerpent.pauseEtReplay()

if ( initScore <= 5 ) {
  //jeuDuSerpent.pauseEtReplay()
setInterval(jeuDuSerpent.vraiDeplacementSerpent , 60)
}
else if ( initScore <= 10) {
  //jeuDuSerpent.pauseEtReplay()
setInterval(jeuDuSerpent.vraiDeplacementSerpent , 50)
}
else if ( initScore <= 15) {
    //jeuDuSerpent.pauseEtReplay()
    setInterval(jeuDuSerpent.vraiDeplacementSerpent, 45)
}
else if ( initScore <= 20) {
    //jeuDuSerpent.pauseEtReplay()
    setInterval(jeuDuSerpent.vraiDeplacementSerpent, 40)
}
else if ( initScore <= 25) {
    //jeuDuSerpent.pauseEtReplay()
    setInterval(jeuDuSerpent.vraiDeplacementSerpent, 35)
}
else if (initScore <= 30) {
  //jeuDuSerpent.pauseEtReplay()
  setInterval(jeuDuSerpent.vraiDeplacementSerpent, 25)
}
else {
  //jeuDuSerpent.pauseEtReplay()
  setInterval(jeuDuSerpent.vraiDeplacementSerpent, 20)
}




   /****** GESTION DES SONS.  ******/
//jeuDuSerpent.gestionAudio();


 /****** GESTION DES COLLISIONS ******/
//jeuDuSerpent.gestionCollisions();

 },
  

  
     /***CRÉATION DU CANVAS***/
  creationDuCanvas:()=>{
    
   //DIV CANVAS CONTENEUR 
   divConteneur = document.createElement('div');
   divConteneur.id = 'conteneur';
   divConteneur.style.height=1000;
   divConteneur.style.display = 'flex';
   divConteneur.style.justifyContent ='center';
   divConteneur.style.alignItems='center';
   divConteneur.style.background=divConteneurBgColor;
    divConteneur.style.opacity = divConteneurOpacite;
    document.body.appendChild(divConteneur);
    
    
    //CANVAS
    cnv =  document.createElement('canvas');
        cnv.id='cnv';
        cnv.style.margin = cnvMargin;
        cnv.height = cnvHeight;
        cnv.width = cnvWidth;  
        cnv.style.border= cnvBorder;
        cnv.style.background = cnvBgColor;
        divConteneur.appendChild(cnv);

        //DIV SCORE
      divScore = document.createElement('div');
       divScore.style.color = divScoreColor;
       divScore.style.fontSize = divScoreFontSize;
       divScore.innerText =initScore;
       divScore.style.position='fixed'
       divScore.zIndex= 100 ;
    divConteneur.appendChild(divScore);
  },
  
      /***CRÉATION DU SERPENT***/
  creationSerpent: () => {
    /***CRÉATION DU CONTEXT***/
   ctx = cnv.getContext('2d');
   ctx.fillStyle = '#EE680A';
   //EFFACER LE SERPENT EN CAS DE DÉPLACEMENTS 
  ctx.clearRect(0 , 0 , cnvWidth , cnvHeight)
   
   /***CRÉATION DU SERPENT***/
   ctx.fillRect(serpentX , serpentY , serpentL , serpentH);
   ctx.fill();
         /******DESSIN DU CŒUR*****/
jeuDuSerpent.creationCœur();

 /****** GESTION DES COLLISIONS ******/
jeuDuSerpent.gestionCollisions();

   /****** GESTION DES SONS.  ******/
jeuDuSerpent.gestionAudio();

  },
  
  
  /*"**********************"
  mouvementsSerpent: () => {
    document.addEventListener('keydown' , (e) => {
    
    switch (e) {
      case 'ArrowUp':
        deplacerY = - serpentH;
        deplacerX = 0;
        
       jeuDuSerpent.positionSerpent();
        break;
      
      case 'ArrowDown':
        deplacerY = serpentH;
        deplacerX = 0;
      jeuDuSerpent.positionSerpent();
        break;
      
      case 'ArrowLeft':
        deplacerX = - serpentL;
        deplacerY = 0;
      jeuDuSerpent.positionSerpent();
        break;
        
        case 'ArrowRight':
        deplacerX = serpentL;
        deplacerY = 0;
      jeuDuSerpent.positionSerpent();
          break;
        
      
    }
    
    })
  },
  
  positionSerpent: () => {
    ctx.clearRect(0 , 0 , cnvWidth , cnvHeight);
    
    serpentX += deplacerX ;
    serpentY += deplacerY;
    
    jeuDuSerpent.creationSerpent();
  },
  
  ***************†*************/
  
  
  /***** CRÉATION DES BOUTONS ****/
creationBoutons: () => {
  
        /*****CRÉATION DU DIV1 *****/
div1 = document.createElement('div');
div1.style.display = 'flex';
div1.style.justifyContent = 'center';
div1.style.alignItems = 'center';
document.body.appendChild(div1);


   /******* CRÉATION DU BTN1 *****/
btn1 = document.createElement('button');
btn1.style.position = 'relative';
btn1.className = 'btn';
btn1.style.bottom = '5px'
div1.appendChild(btn1);

    /****** CRÉATION IMG1 ****/
img1 = document.createElement('img');
img1.src = '/IMAGES BOUTONS/haut.png';
btn1.appendChild(img1)


      /*****CRÉATION DU DIV2 *****/
div2=document.createElement('div');
div2.style.display='flex';
div2.style.justifyContent='center';
div2.style.alignItems='center';
document.body.appendChild(div2);


/******* CRÉATION DU btn2 *****/
btn2=document.createElement('button');
btn2.style.position='relative';
btn2.style.top = '20px';
btn2.style.right= '85px'
btn2.className='btn';
div2.appendChild(btn2);

/****** CRÉATION img2 ****/
img2=document.createElement('img');
img2.src='/IMAGES BOUTONS/gauche.png';
btn2.appendChild(img2);



      /*****CRÉATION DU DIV3 *****/
div3=document.createElement('div');
div3.style.display='flex';
div3.style.justifyContent='center';
div3.style.alignItems='center';
document.body.appendChild(div3);


/******* CRÉATION DU btn3 *****/
btn3=document.createElement('button');
btn3.style.position='relative';
btn3.style.bottom = '20px';
btn3.style.left = '85px'
btn3.className='btn';
div3.appendChild(btn3);

/****** CRÉATION img3 ****/
img3=document.createElement('img');
img3.src='/IMAGES BOUTONS/droite.png';
btn3.appendChild(img3);




      /*****CRÉATION DU DIV4 *****/
div4=document.createElement('div');
div4.style.display='flex';
div4.style.justifyContent='center';
div4.style.alignItems='center';
document.body.appendChild(div4);


/******* CRÉATION DU btn4 *****/
btn4=document.createElement('button');
btn4.style.position='relative';
btn4.className='btn';
btn4.style.top ='5px';
div4.appendChild(btn4);

/****** CRÉATION img4 ****/
img4=document.createElement('img');
img4.src='/IMAGES BOUTONS/bas.png';
btn4.appendChild(img4);

  
},

/**"""" DÉPLACEMENT DU SERPENT ""**/

initDeplacementDuSerpent: () => {
  /****** HAUT *******/
  btn1.addEventListener('click', () => {
    if (!pause) {
      
      deplacerX = 0;
      deplacerY = -0.5 ;
      
  jeuDuSerpent.vraiDeplacementSerpent()
;
 //   serpentY += deplacerY * serpentH;
  //  jeuDuSerpent.creationSerpent();
    }
  });

  /****** DROITE *******/
  btn2.addEventListener('click', () => {
    if (!pause) {
      
      deplacerX = -0.5 ;
      deplacerY = 0;
      
 
 jeuDuSerpent.vraiDeplacementSerpent()
;
  //    serpentX += deplacerX * serpentL;
  //  jeuDuSerpent.creationSerpent();
    }
  });

  /****** GAUCHE *******/
  btn3.addEventListener('click', () => {
    if (!pause) {
      
      deplacerX = 0.5 ;
      deplacerY = 0;
      
 jeuDuSerpent.vraiDeplacementSerpent();

//    serpentX += deplacerX * serpentL;
   //   jeuDuSerpent.creationSerpent();
    }
  });

  /****** BAS *******/
  btn4.addEventListener('click', () => {
    if (!pause) {
     
      deplacerX = 0;
      deplacerY = 0.5;
   
jeuDuSerpent.vraiDeplacementSerpent();
   
 //   serpentY += deplacerY * serpentH;
//    jeuDuSerpent.creationSerpent();
    }
  });

 
},


   /**LA LOGIQUE DU DÉPLACEMENT DU SERPENT**/
   
  vraiDeplacementSerpent : () =>{
  if (!pause) {
  serpentX += deplacerX*serpentL
  serpentY += deplacerY*serpentH
    
  jeuDuSerpent.creationSerpent();
  
  }
  },
  
 
 /**** BOUTONS INTERACTIVES ****/
boutonsInteractives: () => {
 
 
 
 /********.    AU CLICK.      *******/
  function mettreFondAleatoire1(bouton) {
    bouton.style.backgroundColor = couleursSombresVariees[Math.round(Math.random()*couleursSombresVariees.length)]
   bouton.style.height = '60px';
  }
  /************ APRÈS CLICK **********/
  function mettreFondAleatoire2(bouton) {
    bouton.style.backgroundColor =''; //couleursSombresVariees[Math.round(Math.random()*couleursSombresVariees.length)]
   bouton.style.height = '40px';
  }
  
  // Sélectionne tous les éléments avec la classe "btn"
  boutons = document.querySelectorAll('.btn');
  
  // Ajoute les événements touchstart, touchend, mousedown et mouseup
  boutons.forEach(bouton => {
    bouton.addEventListener('touchstart', () => mettreFondAleatoire1(bouton));
    bouton.addEventListener('touchend', () => mettreFondAleatoire2(bouton));
    bouton.addEventListener('mousedown', () => mettreFondAleatoire1(bouton));
    bouton.addEventListener('mouseup', () => mettreFondAleatoire2(bouton));
  });
},

  /*******.  CRÉATION DU CŒUR. *******/
  
creationCœur : () => {
  


// Couleur du remplissage et largeur des contours
ctx.fillStyle = '#00FF1E';   // Couleur bleue pour le remplissage du cœur
ctx.strokeStyle = 'white';  // Couleur rouge pour les contours
ctx.lineWidth = 2;            // Largeur des contours

// Début du tracé du cœur
ctx.beginPath();

// Position du cœur ajustée avec les coordonnées aléatoires
ctx.moveTo(cœurX, cœurY); // Position basse du cœur

// Courbe gauche du cœur
ctx.bezierCurveTo(cœurX - 12.5, cœurY - 10, cœurX - 12.5, cœurY - 20, cœurX, cœurY - 17.5); // Courbe gauche

// Courbe droite du cœur
ctx.bezierCurveTo(cœurX + 12.5, cœurY - 20, cœurX + 12.5, cœurY - 10, cœurX, cœurY); // Courbe droite

// Remplir le cœur
ctx.fill();

// Tracer le contour du cœur
ctx.stroke();

// Dessiner la tige creuse
ctx.beginPath();
ctx.moveTo(cœurX, cœurY - 17.5); // Attache au cœur

// Diminuer la taille de la tige sans changer la forme
ctx.bezierCurveTo(cœurX - 5, cœurY - 18.5, cœurX - 5, cœurY - 30, cœurX, cœurY - 30); // Côté gauche de la tige
ctx.bezierCurveTo(cœurX + 5, cœurY - 30, cœurX + 5, cœurY - 18.5, cœurX, cœurY - 17.5); // Côté droit de la tige

// Tracer la tige creuse (contour uniquement)
ctx.stroke();

    
}, 

/***GESTION DE LA  PAUSE ET DU REPLAY**/
  
  
pauseEtReplay : () => {
 cnv.addEventListener('dblclick' , () => {
   cnv.classList.toggle('pause')
   
   if (cnv.classList.contains('pause')) {
     pause = true;
   }
   else{
     pause = false;
   }
 })
},

   /****** GESTION DES SONS.  ******/
gestionAudio : () =>{
  
  //AUDIO GAGNANT 
  audioGagnant = document.createElement('audio')
  audioGagnant.src = '/sons/sonScore.mp3'
  
   //AUDIO PERDANT 
  audioPerdant = document.createElement('audio')
  audioPerdant.src = '/sons/sonChoc.mp3'
   
},

 /****** GESTION DES COLLISIONS ******/
gestionCollisions : () => {
  if ((serpentX < - 5 || serpentX > (cnvWidth - serpentL)) ||(serpentY < - 3 || serpentY > (cnvHeight - serpentH + 5))) {
    jeuDuSerpent.gestionAudio();
    audioPerdant.play();
    
 /*****ANNULATION DES DÉPLACEMENTS*****/
 deplacerX = 0 ;
 deplacerY = 0 ;
 
 
 
  }
},

}





