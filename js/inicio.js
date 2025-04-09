const botaoCreditos = () => {
    const fundo = document.querySelector(".fundo-preto")
    const creditos = document.querySelector(".creditos")
    if(!fundo.classList.contains("ativado")){
        fundo.classList.add("ativado")
        creditos.classList.add("creditos-ativado")
    } else {
        fundo.classList.remove("ativado")
        creditos.classList.remove("creditos-ativado")
    }
}
const botaoTutorial = () => {
    const fundo = document.querySelector(".fundo-preto")
    const tutorial = document.querySelector(".tutorial")
    if(!fundo.classList.contains("ativado")){
        fundo.classList.add("ativado")
        tutorial.classList.add("tutorial-ativado")
    } else {
        fundo.classList.remove("ativado")
        tutorial.classList.remove("tutorial-ativado")
    }
}