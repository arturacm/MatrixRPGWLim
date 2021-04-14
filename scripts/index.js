//função para começar o jogo.
function start(){

document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <script src="./scripts/estagiario.js"></script>
    <script src="./scripts/hacker.js"></script>
    <script src="./scripts/adolescente.js"></script>
    <script src="./scripts/index.js"></script>
    <script src="./scripts/gameOver.js"></script>
    <link rel="icon" href="http://example.com/favicon.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RPG Matrix</title>
</head>
<body>
    <!--<button onclick="letraPorLetra()">Press start</button>-->
    <main id='content'>
        <h1>Acorde...</h1>
                  
        
    </main>
</body>
</html>
`);
return  setTimeout('digitar()',1000);
}

var myText = `<h2>Já teve aquela sensação que não sabe se está acordado ou dormindo? Se você está aqui deve estar procurando por respostas. Primeiro, quem é você?</h2>`;
var myArray = myText.split("");
var loopTimer;
var fase = 0;
var personagem;


function digitar() {
    if (myArray.length > 0) {
    document.write(myArray.shift());
} else {
    clearTimeout(loopTimer);
    return setTimeout(function(){next();}, 100);
}
loopTimer = setTimeout('digitar()', 70);
}


function next(){
    if (fase == 0){
        fase++
        return pers ();
    }
    else if (fase == 1 && personagem == 1){
        fase++;
        return hacker2();
    }
    else if (fase == 2 && personagem == 1){
        fase++;
        return hacker3();
    }
    else if (fase == 1 && personagem ==2){
        fase++;
        return estagiario2();
    }
    else if (fase == 2 && personagem ==2){
        fase++;
        return estagiario3();
    }
    else if (fase == 1 && personagem ==3){
        fase++;
        return adolescente2();
    }
    else if (fase == 2 && personagem ==3){
        fase++;
        return adolescente3();
    }
    else{
        return gameOver();
    }
}
//função para escolha e caminho para os personagens
function pers (){
    while(true){
        personagem = prompt("1 - um Hacker \n2 - um Estagiário que procurou respostas além do StackOverflow \n3 - Um Adolescente que foi longe demais para baixar filmes piratas");
        if (personagem == 1||personagem == 2||personagem == 3){
            break;
        }
    }
    if(personagem == 1){
        document.write(`
        <div class= "ans"> 
        Sim, sou um hacker. Como você entrou no meu computador? Eu tirei o cabo de rede
        </div>
        `);
        return hacker1();    
    }
    else if(personagem == 2){
        document.write(`<div class= "ans"> Sim! Li muita coisa na deep web. Com certeza os reptilianos estão por trás de algo.</div>`);
        return estagiario1();   
    }
    else if(personagem == 3){
        document.write(`<div class= "ans"> Como eu cheguei aqui? Eu só queria ver o Snyder Cut! </div>`);
        return adolescente1();   
    }
    return false;
}
//export {myText, myArray, letraPorLetra}
