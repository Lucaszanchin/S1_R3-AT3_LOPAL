let primNum = parseInt (prompt(`Insira o primeiro número:`)); //Será armazenado o primero número.
let segNum = parseInt (prompt(`Insira o segundo número:`)); //Será armazenado o segundo número.

if (!isNaN(primNum) && !isNaN(segNum)) {  //Verifica se o usuário digitou um número válido.
  let começo;
  let final;

  if (primNum < segNum) { // Determina o menor e o maior valor entre os dois números inseridos.
    começo = primNum;
    final = segNum;
  } else {
    começo = segNum;
    final = segNum;
  }

  let numP = ""; //Variável para armazenar os números pares encontrados.

  for (let i = começo; i <= final; i++) { // Loop que percorre do menor ao maior número.
    if (i % 2 === 0) {
      numP += i + " ";
    }
  }

  alert("Números pares entre " + começo + " e " + final + ": " + numP);
} else {
  alert("Você digitou um número não válido.");
}