let canvas = document.getElementById('canvas1');
let ctx1 = canvas.getContext('2d');
canvas.height = 600;
canvas.width = canvas.height * (window.innerWidth / window.innerHeight);

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');
// canvas2.width = 600;
canvas2.height = 600;
canvas2.width = canvas2.height * (window.innerWidth / window.innerHeight);

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');
//canvas3.width = 600;
canvas3.height = 600;
canvas3.width = canvas3.height * (window.innerWidth / window.innerHeight);

// let canvas4 = document.getElementById('canvas4');
// let ctx4 = canvas4.getContext('2d');
// //canvas4.width = 800;
// canvas4.height = 750;
// canvas4.width = canvas4.height * (window.innerWidth / window.innerHeight);

let canvas5 = document.getElementById('canvas5');
let ctx5 = canvas5.getContext('2d');
//canvas5.width = 600;
canvas5.height = 600;
canvas5.width = canvas5.height * (window.innerWidth / window.innerHeight);

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


window.addEventListener('resize', res => {
    document.location.reload();
})
// function resize() {
//     let canvas = document.querySelectorAll('canvas');
//     // for (let item of canvas) {
//     //     console.log(item.id);
//     // }
//
//     for (let item of canvas) {
//         item.width = item.clientWidth;
//         item.height = item.clientHeight;
//
//         console.log(item);
//     }
// }
//
// resize();


// window.addEventListener('resize', () => {
//     const canvas = document.querySelectorAll('canvas');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     frog.draw();
// })