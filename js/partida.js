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
    const tecladoLayout = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
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
const verificarLetra = (letra, botao) => {  // Declara a função que verifica se a letra está na palavra
    botao.disabled = true;                  // Desativa o botão para não ser clicado novamente

    if (palavraSecreta.includes(letra)) {   // Verifica se a letra existe na palavra secreta
        for (let i = 0; i < palavraSecreta.length; i++) {  // Percorre cada letra da palavra
            if (palavraSecreta[i] === letra) {            // Se a letra atual for igual à escolhida
                letrasCorretas[i] = letra;                // Armazena a letra na posição correta
            }
        }
    } else {                                // Se a letra não estiver na palavra
        tentativas--;                       // Diminui uma tentativa 
        document.getElementById("erros").textContent = 6 - tentativas; // Atualiza o contador de erros
    }

    mostrarPalavra();                       // Atualiza a exibição da palavra na tela
    verificarFimDeJogo();                   // Checa se o jogo terminou (vitória ou derrota)
}
const reiniciarJogo = () => {  // Declara a função que reinicia o jogo
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];  // Escolhe uma nova palavra aleatória
    tentativas = 6;  // Reseta o número de tentativas para 6
    letrasCorretas = Array(palavraSecreta.length).fill("_");  // Cria um array com underlines 

    document.getElementById("erros").textContent = "0";  // Zera o contador de erros na tela
    criarTeclado();  // Recria os botões do teclado (reativa todos)
    mostrarPalavra();  // Atualiza a exibição da palavra (mostra os underlines iniciais)
}
