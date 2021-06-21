var player = document.querySelector("#player");
var gameContainer = document.getElementById('gameContainer')
window.addEventListener("keydown", function (event) {

    var top = parseInt(player.style.top);
    var left = parseInt(player.style.left);
    var stepPx = 40;
    if (event.key === 'ArrowDown') {
        player.style.top = top + stepPx + 'px';
    }
    if (event.key === 'ArrowUp') {
        player.style.top = top - stepPx + 'px';
    }
    if (event.key === 'ArrowLeft') {
        player.style.left = left - stepPx + 'px';
    }
    if (event.key === 'ArrowRight') {
        player.style.left = left + stepPx + 'px';
    }

    if (player.style.top == -40 + 'px' || player.style.top == 400 + 'px') {
        player.style.top = top + 0 + 'px';
    }
    if (player.style.left == -40 + 'px' || player.style.left == 400 + 'px') {
        player.style.left = left + 0 + 'px';
    }
    // generateMap();
    finish(360, 360)
});


function finish(top, left) {
    if (player.style.top == top + 'px' & player.style.left == left + 'px') {
        player.style.top = 0;
        player.style.left = 0;
        alert('You won the game!')
    }
}

function obstacle(top, left) {
    if (player.style.top == top + 'px' & player.style.left == left + 'px') {
        player.style.top = 0;
        player.style.left = 0;
        alert('Game Over obstacle hit!')
    }
}
let c = 0;

function generateMap() {
    gameContainer.style.display = 'block';
    let array = [];
    for (let j = 0; j <= 360; j = j + 40) {
        array.push(j);
    }
    c++

    for (let i = 0; i < 1; i++) {

        let divElement = document.createElement('div');
        var randomTop = array[Math.floor(Math.random() * array.length)];
        var randomLeft = array[Math.floor(Math.random() * array.length)];
        divElement.style.top = randomTop + 'px';
        divElement.style.left = randomLeft + 'px';
        divElement.classList.add('obstacle');
        if (c <= 1) {
            gameContainer.appendChild(divElement);
        }

    }

}





function x() {

    let a = [[0, 1, 1], [0, 0, 1], [1, 1, 1]];

    for (var i = 0; i < a[i].length; i++) {
        for (var z = 0; z < a.length; z++) {
            console.log(a[z][i]);
        }
    }

    // console.log(x);

}
