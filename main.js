function validaFormulario(){
    if(document.getElementById("nome").value !== "" && document.getElementById("email").value !== "" ){
    alert("Obrigado pelo interesse! Entrarei em contato o mais breve possível.")
    }else{
    alert("Por favor, preencha os campos nome e email.")
    }
}
document.getElementById("botaoenviar").addEventListener("click", validaFormulario)