const INPUT1 = document.getElementById("time1");
const INPUT2 = document.getElementById("gols1");
const INPUT3 = document.getElementById("gols2");
const INPUT4 = document.getElementById("time2");

let inputs = [INPUT1, INPUT2, INPUT3, INPUT4];

inputs.forEach(input => input.addEventListener("change", function(){
    
    let time1 = document.getElementById("time1").value;
    let time2 = document.getElementById("time2").value;
    let gols1 = Number(document.getElementById("gols1").value);
    let gols2 = Number(document.getElementById("gols2").value);
    let vencedor = document.getElementById("vencedor");
    console.log(gols1);
    console.log(gols2);

    if(gols1 == gols2){
        vencedor.textContent = `EMPATE`;
    } else if (gols1 > gols2){
        vencedor.textContent = `${time1} WINS!`;
    } else if (gols1 < gols2){
        vencedor.textContent = `${time2} WINS!`;
    }
}))
