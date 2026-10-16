# 🎮 Calculadora de Partidas Rankeadas

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Acessibilidade-WCAG-green?style=for-the-badge&logo=accessibility&logoColor=white" alt="Acessibilidade">
</p>

<p align="center">
  Uma aplicação interativa e responsiva desenvolvida para calcular o saldo de vitórias de um jogador e determinar sua patente no ranking gamer (Ferro, Bronze, Prata, Ouro, Diamante, Lendário ou Imortal).
</p>

---

## 📋 O que faz

- **Cálculo de Saldo:** Calcula o saldo líquido de partidas (`Vitórias - Derrotas`).
- **Classificação Contínua:** Determina a patente do jogador sem brechas numéricas (incluindo o valor exato `10`).
- **Visual Gamer Interativo:** Exibe badges animados com iluminação neon (*Glow*) personalizada para cada elo.
- **Acessibilidade Integradora:** Notifica leitores de tela em tempo real via atributos `aria-live="polite"`.

---

## 📊 Níveis e Patentes

| Vitórias | Ícone | Nível / Patente | Estilo Visual |
| :--- | :---: | :--- | :--- |
| **< 10** | ⚙️ | **Ferro** | Gradiente Cinza Metálico |
| **10 - 20** | 🥉 | **Bronze** | Gradiente Cobre/Bronze com Glow |
| **21 - 50** | 🥈 | **Prata** | Gradiente Prata Alto Contraste |
| **51 - 80** | 🥇 | **Ouro** | Gradiente Dourado Iluminado |
| **81 - 90** | 💎 | **Diamante** | Gradiente Ciano com Neon |
| **91 - 100** | 👑 | **Lendário** | Gradiente Magenta/Rosa Violeta |
| **≥ 101** | ⚔️ | **Imortal** | Gradiente Carmesim Profundo |

---

## 🚀 Como Usar

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` diretamente em seu navegador.
3. Digite o número de **vitórias** e **derrotas** nos campos numéricos.
4. Clique no botão **"Calcular Nível"**.
5. Visualize o seu saldo de vitórias e o badge da patente conquistada!

---

## 📁 Estrutura de Arquivos

```bash
Calculadora-Rankeada/
├── index.html     # Estrutura semântica, formulário e suporte A11y
├── style.css      # Estilização Dark Slate, variáveis CSS e efeitos de Glow por elo
├── script.js     # Lógica de cálculo, tratamento de exceções e manipulação do DOM
└── README.md      # Documentação técnica do projeto
```

## 💻 Tecnologias Utilizadas
HTML5: Marcação semântica com `<main>`, `<section>`, `<form>` e `<output>`.

CSS3: Variáveis globais (`:root`), Flexbox, gradientes, sombras em neon (`box-shadow`), animações `@keyframes` e suporte a `@media (prefers-reduced-motion)`.

JavaScript (ES6+): Funções puras, validação de entradas (`isNaN`), estrutura condicional contínua e atualização dinâmica do DOM.

## 👩‍💻 Autora

GitHub: @LeticiaMS89
