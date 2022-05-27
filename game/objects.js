// создаем класс объектов(машины, брёвна, черепахи), которые будут препятствиями
class Objects {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        // this.randomise = Math.floor(Math.random() * 30 + 30);
        this.carType = (Math.floor(Math.random() * numberOfCars));
    }
    //отрисовка объектов(черепахи, брёвна, машины)
    draw() {
        if (this.type === 'turtle') {
            ctx1.drawImage(turtle, 0, 0, 70, 70, this.x, this.y, this.width, this.height);
        } else if (this.type === 'log') {
            ctx1.drawImage(log, this.x, this.y, this.width, this.height);
        } else {
            // ctx2.fillRect(this.x, this.y, this.width, this.height);
            ctx2.drawImage(car, this.frameX * this.width, this.carType * this.height, cell * 2, cell, this.x, this.y, this.width, this.height);
        }
    }
    //обновляем
    update() {
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
                this.carType = (Math.floor(Math.random() * numberOfCars));
            }
        } else {
            this.frameX = 1;
            if (this.x < 0 - this.width) {
                this.x = canvas.width + this.width;
                this.carType = (Math.floor(Math.random() * numberOfCars));
            }
        }
    }
}

//инициализируем объекты
function initObjects() {
    // первая полоса препятствий
    for (let i = 0; i < 2; i++) {
        let x = i * 350;
        carsArray.push(new Objects(x, canvas.height - cell * 2 - 20, cell * 2, cell, 1, 'car'));
    }
    // вторая полоса препятствий
    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        carsArray.push(new Objects(x, canvas.height - cell * 3 - 20, cell * 2, cell, -2, 'car'));
    }
    //третья полоса препятствий
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        carsArray.push(new Objects(x, canvas.height - cell * 4 - 20, cell * 2, cell, 2, 'car'));
    }
    //четвертая полоса препятствий
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        logsArray.push(new Objects(x, canvas.height - cell * 5 - 20, cell * 2, cell, -2, 'log'));
    }
    //пятая полоса препятствий
    for (let i = 0; i < 3; i++) {
        let x = i * 200;
        logsArray.push(new Objects(x, canvas.height - cell * 6 - 20, cell, cell, 1, 'turtle'));
    }
}
initObjects();

function handleObjects() {
    for (let i = 0; i < carsArray.length; i++) {

        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++) {

        logsArray[i].update();
        logsArray[i].draw();

    }
    //столкновение с машиной
    for (let i = 0; i < carsArray.length; i++) {
        if (collision(frog, carsArray[i])) {

            resetGame();
            }
    }
    // взаимодействие с брёвнами и черепахами
    if (frog.y < 250 && frog.y > 100) {
        safe = false;

        for (let i = 0; i < logsArray.length; i++) {
            if (collision(frog, logsArray[i])) {
                frog.x += logsArray[i].speed;
                safe = true;
            }
        }
        if (!safe) {
            resetGame();
        }
    }
}

