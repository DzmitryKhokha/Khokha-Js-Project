// объявляем глобальные переменные
const cell = 80; // размер ячейки в пикселях(т.е. шаг на который прыгает лягушка)
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 1; // будет увеличиваться при успешной попытке
let safe = false;

const carsArray = []; // массив машин, которые будут ездить по дороге
const logsArray = []; // массив брёвен, черепах, которые будут плыть по реке

// картинки
const background1 = new Image();
background1.src = '/img/background1-6.png';

const turtle = new Image();
turtle.src = '/img/turtles.png';

const log = new Image();
log.src = '/img/log.png';

const car = new Image();
car.src = '/img/cars.png';
let numberOfCars = 3;

const frogImage = new Image();
frogImage.src = '/img/frog_spritesheet.png';

localStorage.clear();
let users = [{"name":"John","score":8},{"name":"Peter","score":6}];
localStorage.setItem('Users', JSON.stringify(users));

