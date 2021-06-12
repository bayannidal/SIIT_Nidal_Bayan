let handList = ['rock', 'scissors', 'paper'];
let userList = document.getElementsByTagName('input');
let resultScore = document.getElementById('resultScore');
let result = document.getElementById('result');
let start = document.getElementById('buttonStart');
let pcScore = document.getElementById('pcScore');
let userScore = document.getElementById('userScore');
let gameContent = document.getElementById('gameContainer')
let userCount = 0;
let pcCount = 0;
let counter = 0;
let playBtn = document.getElementById('play');
let userChoice;
let pcChoice;
start.addEventListener('click', function () {
    start.style.display = 'none';
    playBtn.style.display = 'inline';
    gameContent.style.display = 'block';
})
function play() {
    result.innerText = '';
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].checked) {
            userChoice = userList[i].value;
            break;
        }
    }

    let randomIndex = Math.floor(Math.random() * handList.length);

    pcChoice = handList[randomIndex];


    if (userChoice == 'rock' && pcChoice == 'rock') {
        resultScore.innerText = 'draw' + ' ' + userChoice + ' ' + pcChoice;
    }
    if (userChoice == 'rock' && pcChoice == 'paper') {
        resultScore.innerText = userChoice + ' ' + ' vs ' + ' ' + pcChoice + ' ' + 'pc wins';
        pcCount = pcCount + 1;
        pcScore.innerText = 'Pc Score: ' + pcCount;
    }
    if (userChoice == 'rock' && pcChoice == 'scissors') {
        resultScore.innerText = userChoice + ' ' + ' vs ' + ' ' + pcChoice + ' ' + 'user wins';
        userCount = userCount + 1;
        userScore.innerText = 'User Score: ' + userCount;
    }
    if (userChoice == 'paper' && pcChoice == 'paper') {
        resultScore.innerText = 'draw' + ' ' + userChoice + ' ' + pcChoice;
    }
    if (userChoice == 'paper' && pcChoice == 'rock') {
        resultScore.innerText = userChoice + ' ' + ' vs ' + ' ' + pcChoice + ' ' + 'user wins';
        userCount = userCount + 1;
        userScore.innerText = 'User Score: ' + userCount;
    }
    if (userChoice == 'paper' && pcChoice == 'scissors') {
        resultScore.innerText = userChoice + ' ' + ' vs ' + ' ' + pcChoice + ' ' + 'pc wins';
        pcCount = pcCount + 1;
        pcScore.innerText = 'Pc Score: ' + pcCount;
    }
    if (userChoice == 'scissors' && pcChoice == 'scissors') {
        resultScore.innerText = 'draw' + ' ' + userChoice + ' ' + pcChoice;
    }
    if (userChoice == 'scissors' && pcChoice == 'rock') {
        resultScore.innerText = userChoice + ' ' + ' vs ' + ' ' + pcChoice + ' ' + 'pc wins';
        pcCount = pcCount + 1;
        pcScore.innerText = 'Pc Score: ' + pcCount;
    }
    if (userChoice == 'scissors' && pcChoice == 'paper') {
        resultScore.innerText = userChoice + ' ' + ' vs ' + ' ' + pcChoice + ' ' + 'user wins';
        userCount = userCount + 1;
        userScore.innerText = 'User Score: ' + userCount;
    }

    if (pcCount == 2) {
        resultScore.innerText = 'User score:' + ' ' + userCount + ' ' + 'Pc score:' + ' ' + pcCount;
        result.innerText = 'PC WON THE GAME';
        pcCount = 0;
        userCount = 0;
        pcScore.innerText = 'Pc Score: ' + pcCount;
        userScore.innerText = 'User Score: ' + userCount;
    }
    if (userCount == 2) {
        resultScore.innerText = 'User score:' + ' ' + userCount + ' ' + 'Pc score:' + ' ' + pcCount;
        result.innerText = 'USER WON THE GAME';
        pcCount = 0;
        userCount = 0;
        pcScore.innerText = 'Pc Score: ' + pcCount;
        userScore.innerText = 'User Score: ' + userCount;
    }

    counter = userCount + pcCount;

    if (counter == 3) {
        if (pcCount > userCount) {
            resultScore.innerText = 'User score:' + ' ' + userCount + ' ' + 'Pc score:' + ' ' + pcCount;
            result.innerText = 'PC WON THE GAME';
            pcCount = 0;
            userCount = 0;
            pcScore.innerText = 'Pc Score: ' + pcCount;
            userScore.innerText = 'User Score: ' + userCount;
        }
        else if (userCount > pcCount) {
            resultScore.innerText = 'User score:' + ' ' + userCount + ' ' + 'Pc score:' + ' ' + pcCount;
            result.innerText = 'USER WON THE GAME';
            pcCount = 0;
            userCount = 0;
            pcScore.innerText = 'Pc Score: ' + pcCount;
            userScore.innerText = 'User Score: ' + userCount;
        }
        else {
            resultScore.innerText = 'User score:' + ' ' + userCount + ' ' + 'Pc score:' + ' ' + pcCount;
            pcCount = 0;
            userCount = 0;
            pcScore.innerText = 'Pc Score: ' + pcCount;
            userScore.innerText = 'User Score: ' + userCount;
        }
    }
}