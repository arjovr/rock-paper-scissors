function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let r = getRandomInt(3);
    return int2play(r);
}

function playRound(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    let playerInt = play2int(player);
    let computerInt = play2int(computer);

    let x = (computerInt - playerInt);
    if (Math.abs(x) == 1) {
        return x;
    }
    return -x;
}

function formatWinner(x) {
    if (x > 0) {
        return 'Computer wins';
    }
    if (x < 0) {
        return 'Player wins';
    }
    return 'Draw';
}

function play2int(play) {
    switch (play.toLowerCase()) {
        case 'rock':
            return 2;
        case 'scissors':
            return 1;
        case 'paper':
            return 0;
    }
    throw 'Esto no deberia pasar';
}

function int2play(r) {
    switch (true) {
        case r >= 0 && r < 1:
            return 'Paper';
        case r >= 1 && r < 2:
            return 'Scissors';
        case r >= 2 && r < 3:
            return 'Rock';
    }
    throw 'Fuera de rango';
}

function choiceHandler(e) {
    let choice = e.target.dataset.choice;
    let winner = playRound(choice, computerPlay());
    let resultsElement = document.querySelector('.results');
    resultsElement.textContent = formatWinner(winner);
    let scoreElement;
    if (winner < 0) {
        scoreElement = document.querySelector('.player-score');
    } else if (winner > 0) {
        scoreElement = document.querySelector('.computer-score');
    } else {
        return; // draw
    }
    let score = parseInt(scoreElement.textContent);
    scoreElement.textContent = ++score;
    if (score == 5) {
        resultsElement.classList.add('final-result');
        let choiceButtons = document.querySelectorAll('.choice-btn');
        choiceButtons.forEach((button) =>  {
            button.removeEventListener('click', choiceButtons);
            button.disabled = true;
        });
    }
}

let choiceButtons = document.querySelectorAll('.choice-btn');

choiceButtons.forEach((button) => {
    button.addEventListener('click', choiceHandler);
});