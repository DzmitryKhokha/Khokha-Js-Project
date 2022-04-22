// создаем класс объектов(машины, брёвна, черепахи), которые будут препятствиями
class Objects {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }
    //метод отрисовки объекта
    draw() {
        ctx1.fillStyle = 'red';
        ctx1.fillRect(this.x, this.y, this.width, this.height)
    }
    //обновляем
    update() {
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
            }
        } else {
            if (this.x < 0 - this.width) {
                this.x = canvas.width + this.width;
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
        carsArray.push(new Objects(x, canvas.height - cell * 5 - 20, cell * 2, cell, -2, 'car'));
    }
    //пятая полоса препятствий
    for (let i = 0; i < 3; i++) {
        let x = i * 200;
        carsArray.push(new Objects(x, canvas.height - cell * 6 - 20, cell, cell, 1, 'car'));
    }
    //далее будут ещё полосы препятствий(надо перерисовать background)
    for (let i = 0; i < 1; i++) {
        let x = i * 100;
        carsArray.push(new Objects(x, canvas.height - cell * 7 - 20, cell, cell, 6, 'car'));
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
}
