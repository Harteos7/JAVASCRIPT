
var ia = {
  x: canvas.width-20,
  y: canvas.height-20,
  width: 20,
  height: 20
};

document.getElementById('Xia').textContent = "X : " + ia.x;
document.getElementById('Yia').textContent = "Y : " + ia.y;

var speedia = 10; //speedometer
var canMoveia = true; // Indicateur pour contrôler les déplacements



//---------------------------------------------------------------- Mouvement --------------------------------

// Appeler la fonction toutes les 0.050 secondes
var intervalIDia = setInterval(iamove, 50);

// Fonction appelée tout les 0.5 seconds
function iamove() {
    // Efface l'ia
    ctx.clearRect(ia.x, ia.y, ia.width, ia.height);

    // Génère un nombre aléatoire entre 0 (inclus) et 1 (exclus)
    var randomNumber = Math.random();

    // Arrondit à l'entier le plus proche (0 ou 1)
    var roundedNumber = Math.round(randomNumber);

    //diagonal haut gauche
    if (bonhomme.y<ia.y && bonhomme.x<ia.x && canMoveia && ia.y > 0) {
        if (roundedNumber == 0) {
            ia.y -= speedia;
            canMoveia = false;
        } else {
            ia.x -= speedia;
            canMoveia = false;
        }
    }
    //diagonal haut droite
    if (bonhomme.y<ia.y && bonhomme.x>ia.x && canMoveia && ia.y > 0) {
        if (roundedNumber == 0) {
            ia.y -= speedia;
            canMoveia = false;
        } else {
            ia.x += speedia;
            canMoveia = false;
        }
    }
    //diagonal bas gauche
    if (bonhomme.y>ia.y && bonhomme.x<ia.x && canMoveia && ia.y > 0) {
        if (roundedNumber == 0) {
            ia.y += speedia;
            canMoveia = false;
        } else {
            ia.x -= speedia;
            canMoveia = false;
        }
    }
    //diagonal bas droite
    if (bonhomme.y>ia.y && bonhomme.x>ia.x && canMoveia && ia.y > 0) {
        if (roundedNumber == 0) {
            ia.y += speedia;
            canMoveia = false;
        } else {
            ia.x += speedia;
            canMoveia = false;
        }
    }
    // déplacement ligne haut
    if (bonhomme.y<ia.y && canMoveia && ia.y > 0) {
        ia.y -= speedia;
        canMoveia = false;
    }
    // déplacement ligne bas
    if (bonhomme.y>ia.y && canMoveia && ia.y < (canvas.height - ia.height)) {
        ia.y += speedia;
        canMoveia = false;
    }
    // déplacement ligne gauche
    if (bonhomme.x<ia.x && canMoveia && ia.x > 0) {
        ia.x -= speedia;
        canMoveia = false;
    }
    // déplacement ligne droite
    if (bonhomme.x>ia.x && canMoveia && ia.x < (canvas.width - ia.width)) {
        ia.x += speedia;
        canMoveia = false;
    }

    canMoveia = true;
    // Actualise la position du bonhomme
    drawia();

    // puis les coordonnées
    document.getElementById('Xia').textContent = "X : " + ia.x;
    document.getElementById('Yia').textContent = "Y : " + ia.y;

    // Dessine un cadre autour du canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    if (ia.x == bonhomme.x && ia.y == bonhomme.y) {
        if (go) {
        gameover();
        }
        go = false;
        clearInterval(intervalIDia);
    }
}






//----------------------------------------------------------------  Functions --------------------------------

function gameover() {
  // Effacez le contenu actuel du canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Définissez le style du texte
  ctx.fillStyle = "red";
  ctx.font = "bold 40px Arial";
  ctx.textAlign = "center";
  ++compt;
  // Dessinez le texte "game over" au centre du canvas
  ctx.fillText("Game Over "+compt, canvas.width / 2, canvas.height / 2);
}








// fonction pour relancer
function reset() {
    // Efface l'ia
    ctx.clearRect(ia.x, ia.y, ia.width, ia.height);
    // On la repositione
    ia.x = canvas.width-20,
    ia.y = canvas.height-20,
    ia.width = 20,
    ia.height = 20
    drawBonhomme();
}



// Fonction qui dessine le bonhomme
function drawia() {
    ctx.fillStyle = "red";
    ctx.fillRect(ia.x, ia.y, ia.width, ia.height);
}

// Initialise la position du bonhomme
drawia();

// Dessine un cadre autour du canvas
ctx.strokeRect(0, 0, canvas.width, canvas.height);