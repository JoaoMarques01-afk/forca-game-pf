// Função que exibe ou oculta a área de créditos na tela inicial
const botaoCreditos = () => {
    const fundo = document.querySelector(".fundo-preto")
    const creditos = document.querySelector(".creditos")
    
    // Exibe os créditos
    if(!fundo.classList.contains("ativado")){
        fundo.classList.add("ativado")
        creditos.classList.add("creditos-ativado")
        
    // Oculta os créditos
    } else {
        fundo.classList.remove("ativado")
        creditos.classList.remove("creditos-ativado")
    }
}

// Função que exibe ou oculta a área de tutorial na tela inicial
const botaoTutorial = () => {
    const fundo = document.querySelector(".fundo-preto")
    const tutorial = document.querySelector(".tutorial")

    // Exibe o tutorial
    if(!fundo.classList.contains("ativado")){
        fundo.classList.add("ativado")
        tutorial.classList.add("tutorial-ativado")

    // Oculta o tutorial
    } else {
        fundo.classList.remove("ativado")
        tutorial.classList.remove("tutorial-ativado")
    }
}
