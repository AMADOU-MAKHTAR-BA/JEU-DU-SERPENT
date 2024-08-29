
var  divConteneur , cnv , divScore , ctx , deplacerX , deplacerY ,serpentX , serpentY , serpentL , serpentH



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


             
const cnvWidth  = 320;
const cnvHeight = 370; 
const cnvBorder = 'dashed 5px white';
const divScoreColor = 'white';
const divConteneurBgColor = 'white';
const divConteneurOpacite = '0.8';
const cnvBgColor = '#000000';
const cnvMargin =  '0 0 10px 0';
      deplacerX = 0;
      deplacerY = 0;
    /***PROPRIÉTÉS DU SERPENT***/
 serpentL = 20;
 serpentH = 20;
      serpentX =Math.round(Math.random()*(cnvWidth - serpentL)); 
      serpentY =Math.trunc(Math.random()*(cnvHeight - serpentH));

export const jeuDuSerpent ={
  
  
  
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
       divScore.innerText ='0';
       divScore.style.position='fixed'
       divScore.zIndex= 100 ;
    divConteneur.appendChild(divScore);
  },
  
      /***CRÉATION DU SERPENT***/
  creationSerpent: () => {
    /***CRÉATION DU CONTEXT***/
   ctx = cnv.getContext('2d');
   ctx.fillStyle = '#EE680A';
   
   /***CRÉATION DU SERPENT***/
   ctx.fillRect(serpentX , serpentY , serpentL , serpentH);
   
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
img1.src = '/IMAGES/haut.png';
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
img2.src='/IMAGES/droite.png';
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
img3.src='/IMAGES/gauche.png';
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
img4.src='/IMAGES/bas.png';
btn4.appendChild(img4);

  
},

/**"""" DÉPLACEMENT DU SERPENT ""**/
initDeplacementDuSerpent: () => {

       /****** HAUT *******/
       btn1.addEventListener('click' , () => {
         ctx.clearRect(0 , 0 , cnvWidth, cnvHeight);
deplacerX = 0;
deplacerY = -1;
      serpentY += deplacerY*serpentH
jeuDuSerpent.creationSerpent();
       });
       
       /****** DROITE *******/
       btn2.addEventListener('click' , () => {
         ctx.clearRect(0 , 0 , cnvWidth, cnvHeight);
deplacerX = 1;
deplacerY = 0;
      serpentX += deplacerX*serpentL
jeuDuSerpent.creationSerpent();
       });
       
       /****** DROITE *******/
       btn3.addEventListener('click', () => {
         ctx.clearRect(0, 0, cnvWidth, cnvHeight)
         deplacerX = -1;
         deplacerY = 0;
         serpentX += deplacerX * serpentL;
         jeuDuSerpent.creationSerpent();
       });
       
    /****** BAS *******/
       btn4.addEventListener('click', () => {
         ctx.clearRect(0, 0, cnvWidth, cnvHeight);
         deplacerX = 0;
         deplacerY = 1;
         serpentY += deplacerY * serpentH
         jeuDuSerpent.creationSerpent();
       });
},
  
  
   /**** BOUTONS INTERACTIVES ****/
boutonsInteractives: () => {
 
 
 
 /********.    AU CLICK.      *******/
  function mettreFondAleatoire1(bouton) {
    bouton.style.backgroundColor = couleursSombresVariees[Math.round(Math.random()*couleursSombresVariees.length)]
   bouton.style.height = '50px';
  }
  /************ APRÈS CLICK **********/
  function mettreFondAleatoire2(bouton) {
    bouton.style.backgroundColor =''; //couleursSombresVariees[Math.round(Math.random()*couleursSombresVariees.length)]
   bouton.style.height = '35px';
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
}