let soma = 0


for (let i = 1; i <= 5; i++) { //Aqui a contagem começa em 1 e termina em 5, pois só será inserido 5 notas.
    
    const notas = parseFloat(prompt(`Digite 5 notas para fazer a média: `)); //Aqui será armazenado os 5 números que o usuário escolheu.
    
    if (isNaN(notas) || notas < 0 || notas > 10) {
      
        alert("Você não digitou um número válido, por favor digite de novo.");  //Verifica se o usuário digitou um número inválido.
    
    } else {
        
        soma += notas //Aqui será feita a soma das notas para fazer a média.

    }

}
media = soma / 5; //Aqui será feita a média aritmética das notas.

alert(`A média das notas que você inseriu é ${media}`); 
