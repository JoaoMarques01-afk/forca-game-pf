//lista de palavras que seram escoolhidas aleatoriamente 
const palavras = ["CACHORRO", "GATO", "ELEFANTE", "CAVALO", "TIGRE", "LEAO", "PASSARO",
    "BANANA", "UVA", "LARANJA", "ABACAXI", "MELANCIA", "MORANGO",
    "BRASIL", "PORTUGAL", "ARGENTINA", "FRANÇA", "ALEMANHA", "ITALIA", "CANADA",
    "CADEIRA", "MESA", "LIVRO", "CELULAR", "COMPUTADOR", "CANETA", "RELOGIO",
    "VERMELHO", "AZUL", "VERDE", "AMARELO", "ROXO", "LARANJA", "PRETO",
    "MEDICO", "ENGENHEIRO", "PROFESSOR", "POLICIAL", "BOMBEIRO", "JORNALISTA"
];

let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]; //variável por verificar se a letra existe na palavra ocultar
let tentativas = 6; // base do número de tentativas 
let letrasCorretas = Array(palavraSecreta.length).fill("_"); // variável que armazena a posição da letra correta

// função que tem como objetivo mostrar a palavra oculta
const mostrarPalavra = () =>{
    //chama a div do arquivo HTML
    const container = document.getElementById("palavra-container");
    container.innerHTML = "";
    //impreme as letras corretas
    letrasCorretas.forEach(letra => {
        const span = document.createElement("span");
        span.classList.add("mostrar");
        span.textContent = letra;
        container.appendChild(span);
    });
}

//cria o teclado na tela
const criarTeclado = () => {
    const tecladoLayout = "ABCDEFGHIJKLÇMNOPQRSTUVWXYZ".split("");
    const teclado = document.getElementById("teclado");
    teclado.innerHTML = "";
    //cria os elementos/teclas do teclado virtual
    tecladoLayout.forEach(letra => {
        const key = document.createElement("button");
        key.textContent = letra;
        key.classList.add("key");
        key.addEventListener("click", () => verificarLetra(letra, key));
        teclado.appendChild(key);
    });
}
const verificarLetra = (letra, botao) => {  // Declara a função que verifica se a letra está na palavra
    if (jogoEncerrado) return; //impede ação depois do jogo terminar
    botao.disabled = true;                  // Desativa o botão para não ser clicado novamente

    if (palavraSecreta.includes(letra)) {   // Verifica se a letra existe na palavra secreta
        for (let i = 0; i < palavraSecreta.length; i++) {  // Percorre cada letra da palavra
            if (palavraSecreta[i] === letra) {            // Se a letra atual for igual à escolhida
                letrasCorretas[i] = letra;                // Armazena a letra na posição correta
            }
        }
    } else {                                
        tentativas--;                       // Diminui uma tentativa 
        document.getElementById("erros").textContent = 6 - tentativas; // Atualiza o contador de erros
    }

    mostrarPalavra();                       // Atualiza a exibição da palavra na tela
    verificarFimDeJogo();                   // Checa se o jogo terminou (vitória ou derrota)
}

// criando uma variavel para controlar quando o jogo terminar
let jogoEncerrado = false;

//função para verificar se o jogo acabou
const verificarFimDeJogo = () => {
    //função que verifica se não há mais "_" na palavra que representa letras não descobertas
    if (!letrasCorretas.includes("_")) {
        jogoEncerrado = true; // marcando que o jogo foi encerado
        // se o jogador ganhou o settimeout vai  dar um alerta a partir de 200 milissegundos com a mensagem do codigo
        setTimeout(() => alert("Parabéns! Você venceu!"), 200);
    } 
    // função que verifica se ainda há mais "_" na palavra que representa letras não descobertas
    else if (tentativas <= 0) {
        jogoEncerrado = true; // marcando que o jogo foi encerado
        //se o jogador ganhou o settimeout vai  dar um alerta a partir de 200 milissegundos com a mensagem do codigo
        setTimeout(() => alert(`Fim de jogo! A palavra era ${palavraSecreta}`), 200);
    }
}
const reiniciarJogo = () => {  // Declara a função que reinicia o jogo
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];  // Escolhe uma nova palavra aleatória
    tentativas = 6;  // Reseta o número de tentativas para 6
    letrasCorretas = Array(palavraSecreta.length).fill("_");  // Cria um array com underlines 

    document.getElementById("erros").textContent = "0";  // Zera o contador de erros na tela
    criarTeclado();  // Recria os botões do teclado (reativa todos)
    mostrarPalavra();  // Atualiza a exibição da palavra (mostra os underlines iniciais)
}

// inicia o jogo
mostrarPalavra(); // mostra os espaços ou letras já acertadas da palavra secreta
criarTeclado();   // cria o teclado virtual para o jogador interagir

