var time = document.getElementsByName('times')
var escolha = ''
var res = document.getElementById('res')

var img = document.createElement('img')
img.setAttribute('id','foto')
img.width = '300'

function escolher(){
    
    if(time[0].checked){
        escolha = 'Corinthians'
        img.setAttribute('src','img/corint.jpg')
    }else if(time[1].checked){
        escolha = 'Palmeiras'
        img.setAttribute('src','img/palm.png')
    }else if(time[2].checked){
        escolha = 'São Paulo'
        img.setAttribute('src','img/spaulo.png')
    } else if(time[3].checked){
        escolha = 'Santos'
        img.setAttribute('src','img/santos1.jpg')
    } else {
        escolha = 'Portuguesa'
        img.setAttribute('src','img/port.jpg')
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Você torce para o ${escolha}<br>`
    res.appendChild(img)
}