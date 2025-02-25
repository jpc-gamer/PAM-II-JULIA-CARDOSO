var frase = "oi, tudo bem com você?";
var letra = "o";
var quantidade = 0

for (var i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    quantidade++
  }
}

document.write(quantidade) 