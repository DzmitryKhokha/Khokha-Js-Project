function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    frog.draw();
    frog.update();
    ctx1.drawImage(background1, 0, 0 , canvas.width, canvas.height);
    handleObjects();
    requestAnimationFrame(animate); //рекурсия
}

animate();

//заставим лягушку двигаться
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

function scored() {
    score++; // зачисляем очко
    gameSpeed += 0.05; // увеличиваем скорсть игры
    frog.x = canvas.width / 2 - frog.width / 2; // ставим лягушку в начальную позицию при зачислении очка
    frog.y = canvas.height - frog.height - 20;
}
