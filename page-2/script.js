const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(this);
    let dados = Object.fromEntries(formData.entries());

    let texto = document.getElementById("vencedor");
    
    if(dados['mao1']==dados['mao2']){
        texto.textContent = `VENCEDOR: EMPATE`;
    }
});