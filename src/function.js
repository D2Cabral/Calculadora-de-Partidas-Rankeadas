let pontuation = computeScore(200, 110);
let computeLevel = level (pontuation)

console.log(`O herói tem o saldo de ${pontuation} e o seu nível é ${computeLevel}`);


function computeScore(victories, defeats) {
    result = victories - defeats;
    return result

}

function level(pontuation){
    
    if (pontuation <= 10){
        return "Ferro"
    } else if (pontuation <= 20) {
        return "Bronze"
    } else if (pontuation <= 50) {
        return "Prata"
    } else if (pontuation <= 80) {
        return "Ouro"
    } else if (pontuation <= 90) {
        return "Diamente"
    } else if (pontuation <= 100) {
        return "Lendário"
    } else 
        return "Imortal"


}