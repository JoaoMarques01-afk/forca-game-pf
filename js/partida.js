// Lista de palavras possíveis para o jogo
const palavras = ["CACHORRO", "GATO", "ELEFANTE", "CAVALO", "TIGRE", "LEAO", "PASSARO",
    "BANANA", "UVA", "LARANJA", "ABACAXI", "MELANCIA", "MORANGO",
    "BRASIL", "PORTUGAL", "ARGENTINA", "FRANÇA", "ALEMANHA", "ITALIA", "CANADA",
    "CADEIRA", "MESA", "LIVRO", "CELULAR", "COMPUTADOR", "CANETA", "RELOGIO",
    "VERMELHO", "AZUL", "VERDE", "AMARELO", "ROXO", "LARANJA", "PRETO",
    "MEDICO", "ENGENHEIRO", "PROFESSOR", "POLICIAL", "BOMBEIRO", "JORNALISTA"
];

// Sorteia uma palavra aleatória da lista
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6; // Número de tentativas restantes
let letrasCorretas = Array(palavraSecreta.length).fill("_");

// Função que mostra a palavra com as letras acertadas (ou sublinhado)
const mostrarPalavra = () =>{
    const container = document.getElementById("palavra-container");
    container.innerHTML = "";
    letrasCorretas.forEach(letra => {
        const span = document.createElement("span");
        span.classList.add("mostrar");
        span.textContent = letra;
        container.appendChild(span);
    });
}

// Cria o teclado virtual com as letras A-Z(utilizando também o "Ç")
const criarTeclado = () => {
    const tecladoLayout = "ABCDEFGHIJKLÇMNOPQRSTUVWXYZ".split("");
    const teclado = document.getElementById("teclado");
    teclado.innerHTML = "";

    tecladoLayout.forEach(letra => {
        const key = document.createElement("button");
        key.textContent = letra;
        key.classList.add("key");
        key.addEventListener("click", () => verificarLetra(letra, key));
        teclado.appendChild(key);
    });
}

// Verifica se a letra clicada está na palavra
const verificarLetra = (letra, botao) => {
    botao.disabled = true; // Desativa o botão após o clique

    if (palavraSecreta.includes(letra)) {
        // Se a letra estiver na palavra, substitui os "_" pelas letras corretas
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                letrasCorretas[i] = letra;
            }
        }
        // Se errar, reduz tentativas e atualiza contador de erros
    } else {
        tentativas--;
        document.getElementById("erros").textContent = 6 - tentativas;
    }

    mostrarPalavra(); // Atualiza a palavra na tela
    verificarFimDeJogo(); // Verifica se o jogo terminou
}

// Verifica se o jogo terminou
const verificarFimDeJogo = () => {
    // se o jogador ganhar
    if (!letrasCorretas.includes("_")) {
        setTimeout(() => alert("Parabéns! Você venceu!"), 200);
    // se jogador perder
    } else if (tentativas <= 0) {
        setTimeout(() => alert(`Fim de jogo! A palavra era ${palavraSecreta}`), 200);
    }
}

// Reinicia o jogo
const reiniciarJogo = () => {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    tentativas = 6;
    letrasCorretas = Array(palavraSecreta.length).fill("_");

    document.getElementById("erros").textContent = "0";
    criarTeclado();
    mostrarPalavra();
}

// Inicialização do jogo ao carregar a página
mostrarPalavra();
criarTeclado();
