function exibirTexto(){
    const pergunta = document.querySelectorAll('.box-pergunta')
    const icone = document.querySelectorAll('.icones')

    pergunta.forEach(perguntas => {
        perguntas.addEventListener('click', ()=>{
            perguntas.classList.toggle('active')
        })
    });
    
}
