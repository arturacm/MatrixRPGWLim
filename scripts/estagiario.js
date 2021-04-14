//import {myText, myArray, letraPorLetra} from "./index.js"


function estagiario1 (){
    myText = `<h2>Você entende que tem algo de errado no mundo. E se eu te dissesse que o Elon Musk está certo e poucas pessoas se tocam que a realidade está cheia de falhas? </h2>`;
    myArray = myText.split("");
    return digitar();

}
function estagiario2 (){
    while(true){
        var ans = prompt("1- Falhas!?\n2- Você deve ser um dos meus superiores tirando uma comigo. Não vou cair nessa dnovo");
        if(ans == 1|| ans == 2){
            break;
        }
    }
    if (ans == 1){
        document.write(`<div class= "ans">Como assim falhas?</div>`);
        myText = `<h2>E se eu te falasse que tudo o que você vê, acredita e vive não é real e o Elon Musk está certo?</h2>`;
        myArray = myText.split("");
        return digitar();
        
    }
    else{
        return reset();
    }
}

function estagiario3 (){
    while(true){
        var ans = prompt("1- Enfim a verdade! \n2- Não vou cair nessa novamente!");
        if(ans == 1|| ans == 2){
            break;
        }
    }
    if (ans == 1){
        document.write(`<div class= "ans">Sempre achei que algo estava errado. Mas uma simulação? Deve ser os Iluminati</div>`);
        myText =  `<h2>Agora eu vou te dar uma esolha.........</h2>`;
        myArray = myText.split("");
        return digitar();
        
    }
    else{
        return reset();
    }
}