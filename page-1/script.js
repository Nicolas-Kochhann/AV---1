function autoSubmit(formID){
    alert(formID);
    document.getElementById(formID).submit()
}

const FORM = document.getElementById("formID");

FORM.autoSubmit();

FORM.addEventListener("submit", function(event){
    event.preventDefault;

    const FORMDATA = FormData(this);
    let dados =  Object.fromEntries(FORMDATA.entries());

    let vencedor = getElementById("vencedor");

    if(dados[gols1] == dados[gols2]){
        vencedor.textContent = `EMPATE`

    } else if (dados[gols1] > dados[gols2]){
        vencedor.textContent = `${dados[time1]} WIN!`

    } else if (dados[gols1] < dados[gols2]){
        vencedor.textContent = `${dados[time2]} WIN!`

    }

    
})