class Spaceship {

    constructor(img, id) {
        this.img = img;
        this.id = id;
    }

    show(parentEl) {
        const imgEl = document.createElement('img');
        imgEl.src = this.img;
        imgEl.style.width = "100px";
        imgEl.style.display = "block";
        imgEl.style.transform = 'rotate(90deg)'
        imgEl.style.margin = '30px'
        this.style = imgEl.style;
        parentEl.append(imgEl)
    }


    move() {
        // this.style.position = 'absolute';
        this.style.left = '400px';
    }
}
const green = new Spaceship('./green-spaceship.png', 'green');
const blue = new Spaceship('./blue-spaceship.png', 'blue')
const red = new Spaceship('./red-spaceship.png', 'red')
let arr = [green, blue, red];
green.show(document.body)
blue.show(document.body)
red.show(document.body)





