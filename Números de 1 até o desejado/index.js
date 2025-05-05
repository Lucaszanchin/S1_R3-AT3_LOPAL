const numeros = parseInt(prompt("Digite um número para mostrar todos de 1 até ele:")); //Será armazenado a constante do número inserido pelo usuário.

contagem = 0;

if (isNaN(numeros) || numeros <= 1) {  //Verifica se o usuário digitou um número válido.
    alert("Digite um número válido, por favor digite um.")  
    let sequencia = "";      //Aqui será armazenado a sequência dos números de 1 até o que ele inseriu.
    for (let i = 1; i <= numeros; i++) {

        
        contagem += i; 
        sequencia += `${i} | `
    }

    alert(`${sequencia}`);
}