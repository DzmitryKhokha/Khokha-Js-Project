// создаем класс Frog
class Frog {
    constructor() {
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = this.spriteWidth / 5; //размеры лягушки
        this.height = this.spriteHeight / 5;
        this.x = canvas.width / 2 - this.width / 2;  //стартовое положение лягушки по х
        this.y = canvas.height - this.height - 20;  //стартовое положение лягушки по y
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        //прыгаем вверх
        if (keys[38]) {
            if (this.moving === false) {
                this.y -= cell;
                this.moving = true;
            }
        }
        // прыгаем вниз
        if (keys[40]) {
            if(this.moving === false && this.y < canvas.height - this.height * 2) {
                this.y += cell;
                this.moving = true;
            }
        }
        // прыгаем влево
        if (keys[37]) {
            if(this.moving === false && this.x > this.width) {
                this.x -= cell;
                this.moving = true;
            }
        }
        // прыгаем вправо
        if (keys[39]) {
            if (this.moving === false && this.x < canvas.width - this.width * 2) {
                this.x += cell;
                this.moving = true;
            }
        }
        //  если лягушку уходит по оси y за пределы игрового поля
        //  (т.е. доходит до противоположного берега реки) засчитываем очко
        if (this.y < 0) {
            scored();
        }
    }
    draw() {
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }
    jump() {
        console.log('jump');
    }
}

const  frog = new Frog();
