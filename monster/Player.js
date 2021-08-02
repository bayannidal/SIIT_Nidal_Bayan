import MoveHtmlElement from "./MoveHtmlElement.js";


class Player extends MoveHtmlElement {
    static create() {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.style.top = "200px";
        playerDiv.style.left = "0px";
        playerDiv.innerText = 5;
        playerDiv.style.color = 'red';
        return playerDiv;
    }

    constructor() {
        super(40, Player.create())
        this.lives = 5;
    }


    show(map) {
        map.append(this.htmlElement)
        console.log(this.lives)

    }

}

export default Player