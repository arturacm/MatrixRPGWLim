
//função que redireciona a pagina para a página pillchoice.html que vai para o endgame
function gameOver() {
    //setTimeout('pillChoice()', 100);
    return window.location.assign("./pillChoice.html");
   
}

//Escolha da pilula vermelha ou azul no fim do jogo
function pillChoice() {
    alert(`vou te dar uma opção, leia atentamente. Tome a pilula azul e você vai acordar como se nada tivesse acontecido mas vai continuar essa sua vida de mentiras e ilusão. `)
    alert(`Tome a pilula vermelha e os seus olhos abrirão. Verá o mundo como realmente é.`)
    var pill = prompt("Digite Vermelha ou Azul").toLowerCase();
    if (pill == "azul") {
        return reset();
    }
    else if (pill == "vermelha"){
        return document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon">
            <link rel="stylesheet" href="style.css">
            <script src="./scripts/gameOver.js"></script>
            <script src="./scripts/estagiario.js"></script>
            <script src="./scripts/hacker.js"></script>
            <script src="./scripts/index.js"></script>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mundo real</title>
        </head>
        <body>
            
            <main>
            <h1>Parabéns, você acordou para a realidade</h1>
            <iframe width="100%" height="200px" src="https://www.youtube.com/embed/7sZIkeFeuOc?autoplay=1&controls=0&amp;start=84" title="YouTube video player" frameborder="0"></iframe>
            <a background= "black" onclick="reset()">Clique aqui para jogar novamente<\a>
            </main>
        </body>
        </html>`);
        
    }
}

//Resetando o jogo para o começo. Mudando os valores das variaveis alteradas para o seu estado inicial.
function reset() {
    alert("Volte  para a sua vida de ilusão e durma.\n\n GAME O")
    myText = `<h2>Já teve aquela sensação que não sabe se está acordado ou dormindo? Se você está aqui deve estar procurando por respostas. Primeiro, quem é você?</h2>`;
    myArray = myText.split("");
    fase = 0;
    return window.location.assign("./index.html");
}
