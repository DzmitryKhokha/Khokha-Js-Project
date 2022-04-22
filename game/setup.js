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

// объявляем глобальные переменные
const cell = 40; // размер ячейки в пикселях(т.е. шаг на который прыгает лягушка)
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 1; // будет увеличиваться с течением времени

const carsArray = []; // массив машин, которые будут ездить по дороге
const logsArray = []; // массив брёвен, лягушек, которые будут плыть по реке

// картинки
const background1 = new Image();
background1.src = '/img/background1-3.png';
