let numero = parseInt(prompt("Digite um número para ver a tabuada dele:")); //Essa variável pede ao usuário o número para ser visualizado a tabuada dele.
let tabuada = "Tabuada de " + numero + ":\n"

for (let i = 1; i <= 10; i++){ //Aqui será armazenado a contagem que mostrará a tabuada do número escolhido até a multiplicação por 10.
    tabuada += numero + "x" + i + " = " + (numero * i) + "\n" //Aqui será feita cada mulplicacação até 10 em relação ao valor dado pelo usuário.
   
}

if (isNaN(numero) || numero<0){ //Verifica se o usuário digitou um número válido.
    alert("Você não digitou um número válido, por favor tente novamente.")  
} else {
    
    alert(tabuada); 
}