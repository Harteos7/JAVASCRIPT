var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Récupérez la largeur et la hauteur de l'écran
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

var go = false;

// Définissez la largeur et la hauteur du canvas en pourcentage
canvas.width = Math.floor((screenWidth * 0.8)/20)*20;
canvas.height = Math.floor((screenHeight * 0.9)/20)*20;

var bonhomme = {
  x: 0,
  y: 0,
  width: 20,
  height: 20
};

document.getElementById('Xbon').textContent = "X : " + bonhomme.x;
document.getElementById('Ybon').textContent = "Y : " + bonhomme.y;
document.getElementById('text2').textContent = "X : " + canvas.width + " / Y : " + canvas.height;

var speed = 10;
var canMove = true; // Indicateur pour contrôler les déplacements











//---------------------------------------------------------------- Keys event --------------------------------


// Fonction appelée lorsque l'utilisateur appuie sur une touche
function onKeyDown(event) {
  if (!canMove) {
    return; // Ne fait rien si le bonhomme ne peut pas bouger
  }

  // Efface le bonhomme
  ctx.clearRect(bonhomme.x, bonhomme.y, bonhomme.width, bonhomme.height);

  switch (event.keyCode) {
    case 38: // flèche du haut
      if (bonhomme.y > 0) { 
        bonhomme.y -= speed;
      }
      break;
    case 40: // flèche du bas
      if (bonhomme.y < (canvas.height - bonhomme.height)) { 
        bonhomme.y += speed;
      }
      break;
    case 37: // flèche de la gauche
      if (bonhomme.x > 0) { 
        bonhomme.x -= speed;
      }
      break;
    case 39: // flèche de la droite
      if (bonhomme.x < (canvas.width - bonhomme.width)) { 
        bonhomme.x += speed;
      }
      break;
  }

  // Actualise la position du bonhomme
  drawBonhomme();

  // puis les coordonnées
  document.getElementById('Xbon').textContent = "X : " + bonhomme.x;
  document.getElementById('Ybon').textContent = "Y : " + bonhomme.y;

  // Dessine un cadre autour du canvas
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  canMove = false; // Désactive les déplacements
  setTimeout(() => {
    canMove = true; // Réactive les déplacements après 0.025 s
  }, 25);
}



//----------------------------------------------------------------  Functions --------------------------------












// Fonction qui dessine le bonhomme
function drawBonhomme() {
  ctx.fillStyle = "black";
  ctx.fillRect(bonhomme.x, bonhomme.y, bonhomme.width, bonhomme.height);
}

// Initialise la position du bonhomme
drawBonhomme();

// Dessine un cadre autour du canvas
ctx.strokeRect(0, 0, canvas.width, canvas.height);

// Attache l'écouteur d'événements
document.addEventListener("keydown", onKeyDown);


