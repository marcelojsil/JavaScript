function verificar() {

    var atual = new Date();
    var ano = atual.getFullYear(); //ano atual
    var nasc = document.getElementById('anonasc'); //ano de nascimento preenchido
    var text = document.querySelector('div#restext'); //lugar do resultado em texto
    var sex = document.getElementsByName('radsex');
    var idade = ano - nasc.value;
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id','foto');
    

    if(nasc.value.length == 0 || Number(nasc.value) > ano){
        text.innerHTML = `Ano inválido, você ainda não nasceu!`;
    } else{
        if(sex[0].checked){ genero='Homem'
            if(idade >= 12 && idade < 18){
                img.setAttribute('src','img/mano.jpg');
            }else if(idade >= 18 && idade < 55) {
                img.setAttribute('src','homem.jpg');
            }else if(idade >= 55) {
                img.setAttribute('src','img/senhor.jpg');
            }else {
                img.setAttribute('src','img/menino.jpg');
            }
        }

        if(sex[1].checked){ genero='Mulher'
            if(idade >= 12 && idade < 18){
                img.setAttribute('src','img/mina.jpg');
            }else if(idade >= 18 && idade < 55) {
                img.setAttribute('src','img/mulher.jpg');
            }else if(idade >= 55) {
                img.setAttribute('src','img/senhora.jpg');
            }else {
                img.setAttribute('src','img/menina.jpg');
            }
        }
    }
    
    text.style.textAlign = 'center'
    text.innerHTML = `Você é ${genero} com ${idade} anos de idade!`
    text.appendChild(img)

}