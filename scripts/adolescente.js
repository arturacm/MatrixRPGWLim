
function adolescente1 (){
    myText = `<h2>Já percebeu como várias coisas no mundo não fazem sentido? Como a caixa preta de um avião é laranja ou como nós calçamos a bota e botamos a calça?</h2>`;
    myArray = myText.split("");
    return digitar();
}
function adolescente2 (){
    while(true){
        var ans = prompt("1- Sim, o mundo não faz sentido \n2- Não, você esté tentando me vender algo.");
        if(ans == 1|| ans == 2){
            break;
        }
    }
    if (ans == 1){
        document.write(`<div class= "ans">Agora que você falou o mundo realmente não faz sentido.</div>`);
        myText = `<h2>E se eu te falasse que tudo o que você vê, acredita e vive não é real?</h2>`;
        myArray = myText.split("");
        return digitar();
    }
    else{
        return reset();
    }
}

function adolescente3 (){
    while(true){
        var ans = prompt("1- Como assim!? \n2- Vou sair daqui, deve ser virus");
        if(ans == 1|| ans == 2){
            break;
        }
    }
    if (ans == 1){
        document.write(`<div class= "ans">mano vc ta doido?</div>`);
        myText = `<h2>Agora eu vou te dar uma esolha.........</h2>`;
        myArray = myText.split("");
        return digitar();
    }
    else{
        return reset();
    }
}