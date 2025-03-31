const INPUT = document.getElementById("time2");

INPUT.addEventListener("change", function(){
    
    let time1 = document.getElementById("time1").value;
    let time2 = document.getElementById("time2").value;
    let gols1 = document.getElementById("gols1").value;
    let gols2 = document.getElementById("gols2").value;
    let vencedor = document.getElementById("vencedor");

    if(gols1 == gols2){
        vencedor.textContent = `EMPATE`;
    } else if (gols1 > gols2){
        vencedor.textContent = `${time1} WINS!`;
    } else if (gols1 < gols2){
        vencedor.textContent = `${time2} WINS!`;
    }
})