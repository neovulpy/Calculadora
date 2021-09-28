function enviar() {
    var altura = document.querySelector('input#altura')
    var peso = document.querySelector('input#peso')
    var resultado = document.querySelector('div#resultado')
    var alt = Number(altura.value) // valor altura
    var pes = Number(peso.value) //valor peso
        alt.toFixed(2).replace(",",".")
    var imc = pes/(alt^2)
        
    
    resultado.innerHTML = `<strong> IMC atual = ${imc.toFixed(1)}</strong><br>`
    if (imc < 18.5) {
        resultado.innerHTML += ' Você está abaixo do peso ideal. Procure o seu médico.'
    } else {
     if (imc >= 18.5 && imc <= 24.9) { 
            resultado.innerHTML += ` Com o peso atual de ${pes} Kg. <br> Parabéns você está dentro do ideal, para a sua saúde.`
    } else if ( imc >= 25 && imc <= 29.9){
            resultado.innerHTML += `Com ${pes}Kg você está com <strong>Sobrepeso</strong>`
    } else  {  
        if ( imc >= 30.0 && imc <= 34.9){
        resultado.innerHTML += `Peso atual ${pes}Kg. <br> <strong>Obesidade grau I </strong>. Risco Sério a sua saúde.`}}
    } 
    
    if (imc >= 35.0 && imc <= 39.9){
        resultado.innerHTML += `Peso atual ${pes}Kg. <br> <strong>Obesidade grau II</strong>. Risco sério a sua saúde.`
    } else {
        if( imc > 40){
        resultando.innerHTML += `Peso atual ${pes}Kg. <br> <strong>OBESIDADE GRAU III</strong>. Procure o seu médico`
        }
    }

   
    
  
}
