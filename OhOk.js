const monImage = document.getElementById('monImage');
const imageOriginale = 'élément/Goku Saiyan.gif';
const imageChange = 'élément/Non/Smile.png';

let peutChanger = true;

monImage.addEventListener('mouseover', function() {
    if (peutChanger) {
        monImage.src = imageChange; 
        peutChanger = false;

        setTimeout(function() {
            monImage.src = imageOriginale; 
            peutChanger = true; 
        }, 5000); 
    }
});

monImage.addEventListener('mouseout', function() {
    if (peutChanger) {
        monImage.src = imageOriginale; 
    }
});



const monTexte = document.getElementById('monTexte');
const texteOriginal = 'Comment devenir fort ?';
const texteModifie = 'Lâche ça';

monTexte.addEventListener('mouseover', function() {

    if (monTexte.textContent === texteOriginal) {
        monTexte.textContent = texteModifie; 
        monTexte.style.color = '#007BFF';
    } else {

        monTexte.textContent = texteOriginal; 
        monTexte.style.color = '#000'; 
    }
});
