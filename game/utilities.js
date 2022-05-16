function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);


    ctx2.drawImage(background1, 0, 0 , canvas.width, canvas.height);
    frog.draw();
    frog.update();

    handleObjects();

    handleScoreBoard();
    requestAnimationFrame(animate); //рекурсия
}
animate();

//заставим лягушку двигаться Переделать на стрелочную функцию
window.addEventListener('keydown', function (e) {
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        frog.jump();
    }
});

window.addEventListener('keyup', function (e) {
    delete keys[e.keyCode];
    frog.moving = false;
})

//функция зачисления очков
function scored() {
    score++; // зачисляем очко
    localStorage.setItem('user-score',JSON.stringify(score));
    gameSpeed += 0.25; // увеличиваем скорсть игры
    frog.x = canvas.width / 2 - frog.width / 2; // ставим лягушку в начальную позицию при зачислении очка
    frog.y = canvas.height - frog.height - 40;
}

//табло с очками
function handleScoreBoard() {
    ctx4.fillStyle = 'green';
    ctx4.strokeStyle = 'black';
    ctx4.font = '30px Arial';
    ctx4.fillText('Score:', 10, 25);
    ctx4.fillStyle = 'green';
    ctx4.font = '40px Verdana';
    ctx4.fillText(score, 110, 30);
    ctx4.fillStyle = 'red';
    ctx4.font = '25px Verdana';
    ctx4.fillText('Collisions: ' + collisionCount, 10, 75);
    ctx4.fillStyle = 'black';
    ctx4.fillText('Game Speed: ' + gameSpeed.toFixed(2), 10, 105);
}

//столкновения с машинами (first - это лягушка, second - машина)
function  collision(first, second) {
    return !( first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y);
    // если любое из выражений true значит лягушка и машины не пересекаются, поэтому мы возвращаем
    // отрицательное значение false, чтобы сделать столкновение
}

//рестарт игры
function resetGame() {
    saveUserScore();
    frog.x = canvas.width / 2 - frog.width / 2;
    frog.y = canvas.height - frog.height - 40;
    score = 0;
    collisionCount++;
    gameSpeed = 1;
}

function saveUserScore() {
    let ask = confirm('You crashed! Continue?');
    if (!ask) {
        let user = prompt('Введите имя: ', '');
        if (user !== '') {
            localStorage.setItem('user-name', JSON.stringify(user));
            let userScore = localStorage.getItem('user-score');
            let userName = localStorage.getItem('user-name');
            alert(userName + ' your score is: ' + userScore);
            SwitchToRecordsPage();
            initTable();
        }
    }
}
