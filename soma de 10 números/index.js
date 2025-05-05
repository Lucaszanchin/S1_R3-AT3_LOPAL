let soma = 0; 
let numero = 0;


for (let i = 1; i <= 10; i += 1) { //Aqui será armazenado a contagem que começará em 1 e terminará em 10.

    numero = parseInt(prompt("Digite 10 números inteiros para soma-lo "+i+"°:")) //Aqui será pedido os 10 números para fazer a soma.

    if (isNaN(numero) || numero < 1) {
        alert("Você não digitou um número válido, por favor tente novamente.") //Verifica se o usuário digitou um número válido.
    } else {
        soma += numero; //Aqui será somado a variável com o valor da soma.
    }
}
alert(`A soma dos dez números inteiros é: ${soma}`)