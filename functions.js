var compt = 0;

// Fonction pour gérer l'événement de pression de la touche espace
function handleSpaceBarPress(event) {
    // Vérifiez si la touche pressée est la barre d'espace (keyCode 32)
    if (event.keyCode === 32) {
        // Appelez la fonction goia() lorsque la barre d'espace est pressée
        goia();
    }
}
  
// Ajoutez un écouteur d'événements pour l'événement de pression de la touche espace
window.addEventListener("keydown", handleSpaceBarPress);
  

function goia() {
    if (go == false) {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'ia.js';
    document.head.appendChild(scriptElement);
    go = true;
    }
}