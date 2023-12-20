function vermais(){

const botao = document.getElementById('botao');
const texto = document.querySelector('.textoescondido');

botao.addEventListener('click', function() {
  if (texto.classList.contains('texto-visivel')) {
    texto.classList.remove('texto-visivel');
    setTimeout(function() {
      texto.style.display = 'none'; // Oculta o elemento após a transição
    }, 50); // Tempo correspondente à duração da transição (500 milissegundos)
  } else {
    texto.style.display = 'block'; // Mostra o elemento antes de alterar a opacidade
    setTimeout(function() {
      texto.classList.toggle('texto-visivel');
    },100); // Espera um curto período antes de adicionar a classe
  }
});
}