function carregar() {

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let infHora = document.getElementById('hora');
    infHora.innerHTML = `Agora são ${hora}:${minuto}`

    let image = document.getElementById('image');

    if(hora > 6 && hora < 12) {
        image.src = 'img/manha1.jpg';
        document.body.style.background = "blue";
    } else if (hora >= 12 && hora < 18) {
        image.src = 'img/tarde1.jpg';
        document.body.style.background = "yellow";
    } else if (hora >= 18 && hora < 24) {
        image.src = 'img/noite1.jpg';
        document.body.style.background = "brown";
    } else { 
        image.src = 'img/madruga1.png'
        document.body.style.background = "black";
    };
}