const validar = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i


const cadastroSucesso = (email) => {
    window.location= `./html/sucess.html?email=${email}`;
}

const formulario = document.querySelector("#formulario");

formulario.addEventListener( "submit", (e) =>{
    e.preventDefault();

    const email = document.querySelector("#email").value;
    
    
   
    if (!validar.test(email)) {
        // Se o email não for válido, mostrar uma mensagem de erro
        
        // Impedir o envio do formulário
        e.preventDefault(); // Isso impede o comportamento padrão do evento de submit
    }
    cadastroSucesso(email)
})