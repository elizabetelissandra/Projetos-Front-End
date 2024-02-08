// const informarEmail = (email) => {
    
// }
const emailCadastrado = document.querySelector(".textoEmail");
const carregarDados = () => {
    const parametros = new URLSearchParams(window.location.search);

    const email = parametros.get('email')

    console.log(email)


    
    console.log(emailCadastrado)
    
    emailCadastrado.innerHTML += `${email}`; 
}
carregarDados()