const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 800;
canvas4.height = 800;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;



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
