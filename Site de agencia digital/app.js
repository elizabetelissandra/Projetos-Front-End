const botao = document.getElementById('botao');
const texto = document.querySelector('.textoescondido');

botao.addEventListener('click', function() {
  if (texto.classList.contains('texto-visivel')) {
    texto.classList.remove('texto-visivel');
  } else {
    texto.classList.add('texto-visivel');
  }
});
