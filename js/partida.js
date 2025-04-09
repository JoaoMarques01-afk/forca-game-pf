const palavras = ["CACHORRO", "GATO", "ELEFANTE", "CAVALO", "TIGRE", "LEAO", "PASSARO",
    "BANANA", "UVA", "LARANJA", "ABACAXI", "MELANCIA", "MORANGO",
    "BRASIL", "PORTUGAL", "ARGENTINA", "FRANÇA", "ALEMANHA", "ITALIA", "CANADA",
    "CADEIRA", "MESA", "LIVRO", "CELULAR", "COMPUTADOR", "CANETA", "RELOGIO",
    "VERMELHO", "AZUL", "VERDE", "AMARELO", "ROXO", "LARANJA", "PRETO",
    "MEDICO", "ENGENHEIRO", "PROFESSOR", "POLICIAL", "BOMBEIRO", "JORNALISTA"
];

let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6;
let letrasCorretas = Array(palavraSecreta.length).fill("_");

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

const verificarLetra = (letra, botao) => {
    botao.disabled = true;

    if (palavraSecreta.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                letrasCorretas[i] = letra;
            }
        }
    } else {
        tentativas--;
        document.getElementById("erros").textContent = 6 - tentativas;
    }

    mostrarPalavra();
    verificarFimDeJogo();
}

// Verifica se o jogo terminou
const verificarFimDeJogo = () => {
    if (!letrasCorretas.includes("_")) {
        setTimeout(() => alert("Parabéns! Você venceu!"), 200);
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

// Inicializa o jogo
mostrarPalavra();
criarTeclado();
