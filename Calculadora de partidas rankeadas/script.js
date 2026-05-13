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

// Função para exibir o resultado na página
function exibirResultado(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    
    const mensagem = document.getElementById('mensagem');
    const nivelBadge = document.getElementById('nivel-badge');
    const resultado = document.getElementById('resultado');
    
    mensagem.textContent = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    
    // Remove todas as classes de nível
    nivelBadge.className = 'nivel-badge';
    
    // Adiciona a classe do nível correspondente
    nivelBadge.classList.add(nivel.toLowerCase());
    nivelBadge.textContent = nivel;
    
    // Mostra o resultado
    resultado.classList.remove('oculto');
}

// Event listener para o formulário
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    
    if (vitorias < 0 || derrotas < 0) {
        alert('Por favor, digite números positivos!');
        return;
    }
    
    exibirResultado(vitorias, derrotas);
});
