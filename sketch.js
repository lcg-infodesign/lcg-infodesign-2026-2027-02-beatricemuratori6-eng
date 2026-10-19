function setup() { // viene eseguito una volta all'inizio
  let numeroColonne = 12;
  let dimQuadratino = windowWidth / numeroColonne;
  let numeroRighe = 20;
  let numeroGlifi = numeroColonne * numeroRighe;

  createCanvas(windowWidth, dimQuadratino * numeroRighe); // canvas grande quanto la finestra 

  let xCorrente = 0; // aggiungo variabili che cambiano ogni volta che disegno un glifo 
  let yCorrente = 0;

  for(let g = 0; g < numeroGlifi; g++) { // ciclo for base per rifare la stessa cosa n volte 
    let scelta = random(4); // sceglie a caso una coppia di colori 
    let coloreSfondo;
    let coloreForma;

    if (scelta < 1) {
      coloreSfondo = "#E4BEE4";
      coloreForma = "#7F1F3A";
    } else if (scelta < 2) {
      coloreSfondo = "#ED6F4F";
      coloreForma = "#E0C8F5";
    } else if (scelta < 3) {
      coloreSfondo = "#CADAFB";
      coloreForma = "#4A5F4A";
    } else {
      coloreSfondo = "#F9E391";
      coloreForma = "#B0201A";
    }

    fill(coloreSfondo); 
    noStroke(); 
    rect(xCorrente, yCorrente, dimQuadratino, dimQuadratino); // riquadro del quadratino 
    
    mioGlifo(xCorrente + dimQuadratino / 2, yCorrente + dimQuadratino / 2, dimQuadratino * 0.8, coloreForma, coloreSfondo); // funziona che disegna i fiori
    xCorrente = xCorrente + dimQuadratino; // spostamento a dx per prossimo giro

    if(xCorrente >= windowWidth) { // se supero il bordo dx, x torna a 0 e va alla riga dopo
      xCorrente = 0;
      yCorrente = yCorrente + dimQuadratino;
    }
  }
}

// FIORE
function mioGlifo(x, y, size, coloreForma, coloreSfondo) {
  angleMode(DEGREES); // per usare gradi invece che radianti
  push();  // push e pop ritornano alle origine degli assi 
  translate(x, y); // sposta origine al centro del quadratino
  rotate(random(360)); // rotazione random

  fill(coloreForma);
  noStroke();

  let numeroPetali = round(random(4, 12)); 
  let lunghezza = size * random(0.25, 0.4);
  let larghezza = lunghezza * random(0.15, 0.5);

  for (let i = 0; i < numeroPetali; i++) {
   push();
   rotate(i * 360 / numeroPetali); // angolo diverso a ogni giro
   translate(lunghezza / 2, 0);
   ellipse(0, 0, lunghezza, larghezza); // petalo
   pop();  
  }

  fill(coloreSfondo);
  circle(0, 0, size * 0.08);
  
  pop();
}
