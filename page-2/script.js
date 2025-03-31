const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(this);
    let dados = Object.fromEntries(formData.entries());

    let texto = document.getElementById("vencedor");

    if(dados['mao1']==dados['mao2']){
        texto.textContent = `VENCEDOR: EMPATE`;
    }else if(dados['mao1']=="pedra" && dados['mao2']=="tesoura"){
        texto.textContent = `VENCEDOR: Jogador 1`;
    }else if(dados['mao1']=="papel" && dados['mao2']=="pedra"){
        texto.textContent = `VENCEDOR: Jogador 1`;
    }else if(dados['mao1']=="tesoura" && dados['mao2']=="papel"){
        texto.textContent = `VENCEDOR: Jogador 1`;
    }else if(dados['mao2']=="pedra" && dados['mao1']=="tesoura"){
        texto.textContent = `VENCEDOR: Jogador 2`;
    }else if(dados['mao2']=="papel" && dados['mao1']=="pedra"){
        texto.textContent = `VENCEDOR: Jogador 2`;
    }else if(dados['mao2']=="tesoura" && dados['mao1']=="papel"){
        texto.textContent = `VENCEDOR: Jogador 2`;
    }
});