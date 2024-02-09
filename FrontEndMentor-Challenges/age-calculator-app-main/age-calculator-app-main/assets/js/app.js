const formulario = document.querySelector("#formulario");

const resultados = (inputDia, inputMes, inputAno) => {
    const resultadoAno = 2024-inputAno;
    const resultadoMes = 12-inputMes;
    const resultadoDia = 30-inputDia;

    document.querySelector('.resultAno').innerHTML= `${resultadoAno}`
    document.querySelector('.resultMes').innerHTML= `${resultadoMes}`
    document.querySelector('.resultDia').innerHTML= `${resultadoDia}`
}

formulario.addEventListener("submit", e => {
  e.preventDefault();
  // Pegar as informações do formulario
  const inputDia = document.querySelector(`#dia`).value;
  const inputMes = document.querySelector(`#mes`).value;
  const inputAno = document.querySelector(`#ano`).value;

  
    resultados(inputDia, inputMes, inputAno);
});


