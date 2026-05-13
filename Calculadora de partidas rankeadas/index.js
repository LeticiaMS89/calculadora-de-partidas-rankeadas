// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função para determinar o nível baseado nas vitórias
function determinarNivel(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    return "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    return "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    return "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    return "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    return "Lendário";
  } else if (vitorias >= 101) {
    return "Imortal";
  }
}

// Função principal que exibe o resultado
function exibirResultado(vitorias, derrotas) {
  const saldoVitorias = calcularSaldo(vitorias, derrotas);
  const nivel = determinarNivel(vitorias);
  
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplos de uso:
exibirResultado(5, 2);      // Ferro
exibirResultado(15, 3);     // Bronze
exibirResultado(35, 10);    // Prata
exibirResultado(65, 15);    // Ouro
exibirResultado(85, 5);     // Diamante
exibirResultado(95, 10);    // Lendário
exibirResultado(105, 20);   // Imortal
