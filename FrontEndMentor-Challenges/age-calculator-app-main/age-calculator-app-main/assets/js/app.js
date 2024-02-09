const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit",  (e) => {
    e.preventDefault()
    // Pegar as informações do usuário
    const inputDia = document.querySelector(`#dia`).value;
    const inputMes = document.querySelector(`#mes`).value;
    const inputAno = document.querySelector(`#ano`).value;
    
    //calcular idade pela data de nascimento
    const resultadoAno = 2023-inputAno;
    const resultadoMes = 12-inputMes;
    const resultadoDia = 30-inputDia;

    const resultAno = document.querySelector('.resultAno').innerHTML= `${resultadoAno}`
    const resultMes = document.querySelector('.resultMes').innerHTML= `${resultadoMes}`
    const resultDia = document.querySelector('.resultDia').innerHTML= `${resultadoDia}`
})
