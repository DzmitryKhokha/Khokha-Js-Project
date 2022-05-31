'use strict'

// import InputHandler from "../input.js";
// new InputHandler();
function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(background1, 0, 0 , canvas.width, canvas.height);
    frog.draw();
    frog.update();
    handleObjects();
    handleScoreBoard();
    requestAnimationFrame(animate);
}
animate();

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
    ctx4.font = '25px Arial';
    ctx4.fillText('Score:', 50, 20);
    ctx4.fillStyle = 'green';
    ctx4.font = '30px Verdana';
    ctx4.fillText(score.toString(), 125, 25);
    ctx4.fillStyle = 'red';
    ctx4.font = '20px Verdana';
    ctx4.fillText('Collisions: ' + collisionCount, 200, 20);
    ctx4.fillStyle = 'black';
    ctx4.fillText('Game Speed: ' + gameSpeed.toFixed(2), 380, 20);
}

//столкновения с машинами (first - это лягушка, second - машина)
function  collision(first, second) {
    return !( first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y);
}

//рестарт игры
function resetGame() {
    saveScore();
    frog.x = canvas.width / 2 - frog.width / 2;
    frog.y = canvas.height - frog.height - 40;
    score = 0;
    collisionCount++;
    gameSpeed = 1;
}

function saveScore() {
    const requestURL = 'https://jsonplaceholder.typicode.com/users';
    let body;
    let ask = confirm('You crashed! Continue?');

    if (!ask) {
        let user = prompt('Введите имя: ', '');
        const regExp = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
        if (user !== '') {
           body = {
               name: user,
               score: score
           }
            sendRequest('POST', requestURL, body)
                .then(data => {
                    console.log(data);
                    function addEntry() {
                        // Parse the JSON stored in allEntriesP
                        let existingEntries = JSON.parse(localStorage.getItem("Users"));
                        if(existingEntries == null) existingEntries = [];
                        let entry = {
                            "name": data.name,
                            "score": data.score
                        };
                        localStorage.setItem("user", JSON.stringify(entry));
                        // Save allEntries back to local storage
                        existingEntries.push(entry);
                        localStorage.setItem("Users", JSON.stringify(existingEntries));
                        console.log(existingEntries);
                        for (let i = 0; i < existingEntries.length; i++) {
                            console.log(existingEntries[i]);
                            let userNm = document.getElementById('user-name');
                            let div2 = document.createElement('div');
                            div2.innerHTML = existingEntries[i].name;
                            userNm.appendChild(div2);
                            let userScr = document.getElementById('user-score');
                            let div3 = document.createElement('div');
                            div3.innerHTML = existingEntries[i].score;
                            userScr.appendChild(div3);
                        }
                    }
                    addEntry();
                })
                .catch( err => console.log(err))
        }
        SwitchToRecordsPage();
    }

    function sendRequest(method, url, body = null) {
        const headers = {
            'Content-Type': 'application/json'
        }
        return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        }).then( response => {
            return response.json();
        })
    }
}
