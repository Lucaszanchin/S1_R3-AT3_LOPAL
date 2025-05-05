let primNum = parseInt (prompt(`Insira o primeiro número:`)); //Será armazenado o primero número.
let segNum = parseInt (prompt(`Insira o segundo número:`)); //Será armazenado o segundo número.


if (!isNaN(primNum) && !isNaN(segNum)) {  //Verifica se o usuário digitou um número válido.
  let inicio;
  let termino;

  if (primNum < segNum) { // Determina o menor e o maior valor entre os dois números inseridos.
    inicio = primNum;
    termino = segNum;
  } else {
    inicio = segNum;
    termino = segNum;
  }

  let numerosPares = ""; //Variável para armazenar os números pares encontrados.

  for (let i = inicio; i <= termino; i++) { // Loop que percorre do menor ao maior número.
    if (i % 2 === 0) {
      numerosPares += i + " ";
      
    }
  }

alert(`Números pares entre ${inicio} e ${termino} : ${numerosPares}`);
} else {
  alert("Você digitou um número não válido.");
}