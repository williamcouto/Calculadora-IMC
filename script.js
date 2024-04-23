function CalculaIMC(){
    let peso = document.getElementById('peso_usuario').value
    let altura = document.getElementById('altura_usuario').value
    let resultado = document.querySelector('div#resultado')
    let resultIMC = document.getElementById('result_IMC')
    let valorIMC = (peso / (altura * altura)).toFixed(2)
    //Verifica se os campos estão vazios.
    if(peso.length <= 0 || altura.length === ''){
        window.alert("ERRO: dados incompletos!")
    }
    
    if(valorIMC < 18.5){
        resultIMC.style.backgroundColor = 'blue'
        resultIMC.innerHTML = `${valorIMC}`
        resultIMC.style.backgroundColor = '#C9EEFF'
        resultado.innerHTML = `Abaixo do peso`
    }
    else if((valorIMC >= 18.5) && (valorIMC < 25)){
        resultIMC.innerHTML = `${valorIMC}`
        resultIMC.style.backgroundColor = '#4FFF52'
        resultado.innerHTML = `Peso normal`
    }
    else if((valorIMC >= 25) && (valorIMC < 30)){
        resultIMC.innerHTML = `${valorIMC}`
        resultIMC.style.backgroundColor = '#FEE020'
        resultado.innerHTML = `Sobrepeso`
    }
    else if((valorIMC >= 30) && (valorIMC < 35)){
        resultIMC.innerHTML = `${valorIMC}`
        resultIMC.style.backgroundColor = '#FF0A1F'
        resultIMC.style.color = "#FFFF"
        resultado.innerHTML = `Obesidade`
    }
    else if((valorIMC >= 35) && (valorIMC < 40)){
        resultIMC.innerHTML = `${valorIMC}`
        resultIMC.style.backgroundColor = '#CC0011'
        resultIMC.style.color = "#FFFF"
        resultado.innerHTML = `Obesidade severa`
    }   
    else if(valorIMC > 40){
        resultIMC.innerHTML = `${valorIMC}`
        resultIMC.style.backgroundColor = '#660008'
        resultIMC.style.color = "#FFFF"
        resultado.innerHTML = `Obesidade mórbida`
    }
}
