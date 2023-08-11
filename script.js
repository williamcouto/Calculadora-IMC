function CalculaIMC(){
    let name = document.getElementById('nome_usuario').value
    let peso = document.getElementById('peso_usuario').value
    let altura = document.getElementById('altura_usuario').value
    let resultado = document.querySelector('div#resultado')
    let valorIMC = (peso / (altura * altura)).toFixed(2)

    //Verifica se os campos estão vazios.
    if(name.length === '' || peso.length <= 0 || altura.length === ''){
        window.alert("ERRO: dados incompletos!")
    }
    if(valorIMC < 18.5){
        resultado.innerHTML = `Olá, ${name}! você está abaixo do peso.`
    }
    else if((valorIMC >= 18.5) && (valorIMC < 25)){
        resultado.innerHTML = `Olá, ${name}! você está com o peso normal.`
    }
    else if((valorIMC >= 25) && (valorIMC < 30)){
        resultado.innerHTML = `Olá, ${name}! você está sobrepeso.`
    }
    else if((valorIMC >= 30) && (valorIMC < 35)){
        resultado.innerHTML = `Olá, ${name}! você está com obesidade.`
    }
    else if((valorIMC >= 35) && (valorIMC < 40)){
        resultado.innerHTML = `Olá ${name}  CUIDADO! você está com obesidade severa.`
    }   
    else if(valorIMC > 40){
        resultado.innerHTML = `Olá, ${name} CUIDADO! você está com obesidade mórbida.`
    }
}