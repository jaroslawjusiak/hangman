console.log('Hangman jest gotowy do gry!');
let game = {
    started: false,
    finished: false,
    steps: 0
}
const btnHandler = () => {
    console.log('Kliknięto przycisk nowej gry');
    if (!game.started) {
        game.started = true;
        document.getElementById("btnNewGame").innerHTML = "Szukaj";
        document.getElementById("guessInput").hidden = false;
        game.steps++;
    }
}

// https://www.w3schools.com/js/js_htmldom_nodes.asp