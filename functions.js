var compt = 0;

function goia() {
    if (go == false) {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'ia.js';
    document.head.appendChild(scriptElement);
    go = true;
    }
}