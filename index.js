const xpMaximoPorCategoria = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
const nomeHeroi = "Alastair";
const xp = 9100;
let classe = "";
let i = 0;

while (i < xpMaximoPorCategoria.length) {
  if (xp <= xpMaximoPorCategoria[i]) {
    switch (i) {
      case 0:
        classe = "Ferro";
        break;
      case 1:
        classe = "Bronze";
        break;
      case 2:
        classe = "Prata";
        break;
      case 3:
        classe = "Ouro";
        break;
      case 4:
        classe = "Platina";
        break;
      case 5:
        classe = "Ascendente";
        break;
      case 6:
        classe = "Imortal";
        break;

      default:
        break;
    }
    break;
  } else if (xp > 10000) {
    classe = "Radiante";
    break;
  } else {
    i++;
  }
}

console.log(`O herói ${nomeHeroi} pertence a classe ${classe}`);
