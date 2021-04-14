//import {myText, myArray, letraPorLetra} from "./index.js"


function hacker1 (){
    myText = `<h2>Você está fazendo as perguntas certas. Já percebeu como várias coisas no mundo não fazem sentido? Como o Exaltasamba toca Pagode e o Zeca Pagodinho toca Samba?</h2>`;
    myArray = myText.split("");
    return digitar();
}
function hacker2 (){
    while(true){
        var ans = prompt("1- Sim, o mundo não faz sentido \n2- Eu não sei como chegou aqui mas deve ser um chatbot");
        if(ans == 1|| ans == 2){
            break;
        }
    }
    if (ans == 1){
        document.write(`<div class= "ans">Sempre achei que algo estava errado </div>`);
        myText = `<h2>E se eu te falasse que tudo o que você vê, acredita e vive não é real?</h2>`;
        myArray = myText.split("");
        return digitar();
    }
    else{
        return reset();
    }
}

function hacker3 (){
    while(true){
        var ans = prompt("1- Não é real!? \n2- Hora de formatar esse pc, está comprometido");
        if(ans == 1|| ans == 2){
            break;
        }
    }
    if (ans == 1){
        document.write(`<div class= "ans">Você tinha a minha curiosidade, agora tem a minha atenção</div>`);
        myText = `<h2>Agora eu vou te dar uma esolha.........</h2>`;
        myArray = myText.split("");
        return digitar();
    }
    else{
        return reset();
    }
}