function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let r = getRandomInt(3);
    return int2play(r);
}

function plays(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    let playerInt = play2int(player);
    let computerInt = play2int(computer);

    let x = (computerInt - playerInt);
    if (Math.abs(x) == 1) {
        return decideWin(x);
    }
    return decideWin(x * -1);
}

function decideWin(x) {
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