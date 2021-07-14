class Spaceship {

    // constructor(img, id, left, top) {
    //     this.img = img;
    //     this.id = id;
    //     this.top = top;
    //     this.left = left;
    //     this.active = false;
    // }
    constructor(img, id, top) {
        this.img = img;
        this.id = id;
        this.active = false;
        this.top = top;
    }

    createElement() {
        const imgEl = document.createElement('img');
        imgEl.src = this.img;
        imgEl.style.width = "100px";
        imgEl.style.display = "block";
        imgEl.style.top = this.top;
        imgEl.style.left = this.left;
        imgEl.style.transition = 'linear 0.2s'
        imgEl.style.backgroundColor = 'grey'
        imgEl.style.border = '1px solid red'
        imgEl.style.padding = '10px'
        imgEl.style.left = '0'
        return imgEl;
    }
    show(parentEl) {
        this.spaceShip = this.createElement();
        this.style = this.spaceShip.style;
        parentEl.append(this.spaceShip)
        this.registerClick();

    }
    registerClick() {
        this.spaceShip.addEventListener('click', () => {
            this.active = !this.active;
            if (this.active == false) {
                this.style.backgroundColor = 'grey'
                this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
            }
            else {
                this.style.backgroundColor = 'white'
            }
        })
    }


    moveRight(step) {
        if (this.active) {
            const left = parseInt(this.style.left, 0)
            this.style.left = left + step + 'px';
            this.style.transform = 'rotate(90deg)';

        }
    }
    moveLeft(step) {
        if (this.active) {

            const left = parseInt(this.style.left, 0)
            this.style.left = left - step + 'px';
            this.style.transform = 'rotate(-90deg)';

        }
    }
    moveUp(step) {
        if (this.active) {
            const top = parseInt(this.style.top, 0)
            this.style.top = top - step + 'px';
            this.style.transform = 'rotate(0deg)';

        }
    }

    moveDown(step) {
        if (this.active) {
            const top = parseInt(this.style.top, 0)
            this.style.top = top + step + 'px';
            this.style.transform = 'rotate(180deg)';

        }
    }

}

const green = new Spaceship('./green-spaceship.png', 'green', 10 + 'px');
// const blue = new Spaceship('./blue-spaceship.png', 'blue', 50 + 'px')
// const red = new Spaceship('./red-spaceship.png', 'red', 90 + 'px')

let spaceShipList = [green];

spaceShipList.forEach((spaceShip) => spaceShip.show(document.body));
window.addEventListener("keydown", function (event) {
    if (event.key === 'ArrowDown') {
        spaceShipList.forEach((spaceShip) => {
            spaceShip.moveDown(50);
        });
    }
    if (event.key === 'ArrowUp') {
        spaceShipList.forEach((spaceShip) => {
            spaceShip.moveUp(50);
        });
    }
    if (event.key === 'ArrowLeft') {
        spaceShipList.forEach((spaceShip) => {
            spaceShip.moveLeft(50);
        });
    }
    if (event.key === 'ArrowRight') {
        spaceShipList.forEach((spaceShip) => {
            spaceShip.moveRight(50);
        });
    }
});



const generateSpaceship = document.createElement('button');
generateSpaceship.innerText = 'Generate Ship'
document.body.appendChild(generateSpaceship);
let c = 1;
let firstTimePassed = false;
generateSpaceship.addEventListener("click", function () {
    let lastItem = parseInt(spaceShipList[spaceShipList.length - 1].style.top);

    c++;
    if (c == 1 && firstTimePassed) {
        const spaceShip = new Spaceship('./green-spaceship.png', 'green', lastItem + 40 + 'px');
        spaceShipList.push(spaceShip);
        spaceShip.show(document.body);
        firstTimePassed = true;
    }
    if (c == 2) {
        const spaceShip = new Spaceship('./blue-spaceship.png', 'blue', lastItem + 40 + 'px');
        spaceShipList.push(spaceShip);
        spaceShip.show(document.body);
    }
    if (c == 3) {
        const spaceShip = new Spaceship('./red-spaceship.png', 'red', lastItem + 40 + 'px');
        spaceShipList.push(spaceShip);
        spaceShip.show(document.body);
        c = 0;
        firstTimePassed = true;
    }

});

