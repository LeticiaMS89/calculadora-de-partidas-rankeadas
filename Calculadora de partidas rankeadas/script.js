/**
 * ===================================================================
 * CALCULADORA DE PARTIDAS RANKEADAS - LÓGICA PRINCIPAL (JS ES6+)
 * ===================================================================
 * 
 * Este arquivo contém:
 * - Dicionário de Patentes (Elos, ícones e limites de vitórias)
 * - Função pura de cálculo de saldo
 * - Função de classificação de nível sem brechas numéricas
 * - Manipulação segura do DOM e atualização de atributos de acessibilidade (A11y)
 */

// Garante a execução apenas após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

  /**
   * Mapeamento de patentes com seus respectivos limites, ícones e classes CSS
   */
  const PATENTES = {
    FERRO: { nome: 'Ferro', icone: '⚙️', cssClass: 'ferro' },
    BRONZE: { nome: 'Bronze', icone: '🥉', cssClass: 'bronze' },
    PRATA: { nome: 'Prata', icone: '🥈', cssClass: 'prata' },
    OURO: { nome: 'Ouro', icone: '🥇', cssClass: 'ouro' },
    DIAMANTE: { nome: 'Diamante', icone: '💎', cssClass: 'diamante' },
    LENDARIO: { nome: 'Lendário', icone: '👑', cssClass: 'lendario' },
    IMORTAL: { nome: 'Imortal', icone: '⚔️', cssClass: 'imortal' }
  };

  /**
   * 1️⃣ Função pura para calcular o saldo de vitórias
   * @param {number} vitorias 
   * @param {number} derrotas 
   * @returns {number} Saldo líquido (Vitórias - Derrotas)
   */
  function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
  }

  /**
   * 2️⃣ Função para determinar o nível/elo baseado no número de vitórias
   * CORREÇÃO: Estrutura contínua que elimina o bug onde vitórias = 10 retornavam undefined.
   * @param {number} vitorias 
   * @returns {Object} Objeto com dados da patente (nome, ícone, classe CSS)
   */
  function determinarNivel(vitorias) {
    if (vitorias < 10) {
      return PATENTES.FERRO;
    } else if (vitorias <= 20) { // Cobre de 10 a 20
      return PATENTES.BRONZE;
    } else if (vitorias <= 50) { // Cobre de 21 a 50
      return PATENTES.PRATA;
    } else if (vitorias <= 80) { // Cobre de 51 a 80
      return PATENTES.OURO;
    } else if (vitorias <= 90) { // Cobre de 81 a 90
      return PATENTES.DIAMANTE;
    } else if (vitorias <= 100) { // Cobre de 91 a 100
      return PATENTES.LENDARIO;
    } else { // 101 ou mais
      return PATENTES.IMORTAL;
    }
  }

  /**
   * 3️⃣ Exibe os resultados calculados na interface e atualiza acessibilidade
   * @param {number} vitorias 
   * @param {number} derrotas 
   */
  function exibirResultado(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const patente = determinarNivel(vitorias);

    const elementoMensagem = document.getElementById('mensagem');
    const nivelBadge = document.getElementById('nivel-badge');
    const painelResultado = document.getElementById('resultado');

    if (!elementoMensagem || !nivelBadge || !painelResultado) return;

    // Formata o saldo e exibe no painel
    const sinalSaldo = saldoVitorias >= 0 ? '+' : '';
    elementoMensagem.innerHTML = `O Herói tem saldo de <span class="highlight-saldo">${sinalSaldo}${saldoVitorias}</span> e está no nível:`;

    // Atualiza a badge com ícone, texto e classe visual de gradiente/glow
    nivelBadge.className = `nivel-badge ${patente.cssClass}`;
    nivelBadge.innerHTML = `<span aria-hidden="true">${patente.icone}</span> ${patente.nome}`;
    nivelBadge.setAttribute('aria-label', `Patente conquistada: ${patente.nome}`);

    // Torna o painel visível e atualiza o estado de acessibilidade
    painelResultado.classList.remove('oculto');
    painelResultado.setAttribute('aria-hidden', 'false');

    // Suave rolagem até o resultado em telas menores
    painelResultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Captura do formulário
  const formulario = document.getElementById('formulario');

  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();

      const inputVitorias = document.getElementById('vitorias');
      const inputDerrotas = document.getElementById('derrotas');

      const vitorias = parseInt(inputVitorias.value, 10);
      const derrotas = parseInt(inputDerrotas.value, 10);

      // Validação de entrada (impede NaN e valores negativos)
      if (isNaN(vitorias) || isNaN(derrotas)) {
        alert('Por favor, preencha todos os campos com números válidos!');
        return;
      }

      if (vitorias < 0 || derrotas < 0) {
        alert('O número de vitórias e derrotas não pode ser negativo!');
        return;
      }

      exibirResultado(vitorias, derrotas);
    });
  }

});
