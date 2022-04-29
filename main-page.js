/*
var audio = document.getElementById('sound');
document.addEventListener('DOMContentLoaded', function () {
    audio = new Audio().play();
    console.log(audio);
})*/
'use strict'
SwitchToStateFromURLHash();
window.onhashchange = SwitchToStateFromURLHash;

function SwitchToStateFromURLHash() {
    var hash = window.location.hash;
    var State = decodeURIComponent(hash.substr(1));
    if (State !== "")
        State = JSON.parse(State);
    else
        State = {pagename: 'Main'};
    var PageHTML = "";

    switch (State.pagename) {
        case 'Main':
            PageHTML += "<div class='wrapper' id='wrapper'>" +
                            "<div class='main-menu'>" +
                                "<button class='btn' id='new-game' onclick='SwitchToNewGamePage()'>New Game</button>" +
                                "<button class='btn' id='rules' onclick='SwitchToRulesPage()'>Rules</button>" +
                                "<button class='btn' id='records' onclick='SwitchToRecordsPage()'>Records</button>" +
                                "<button class='btn' id='about-game' onclick='SwitchToAboutPage()'>About Game</button>" +
                            "</div>" +
                            "<div class='container'>" +
                                "<div class='logo'>" +
                                    "<figure><img src='img/main-page-background-4.png' alt='frogger' class='frog'></figure>" +
                                "</div>" +
                            "</div>" +
                        "</div>";
            break;
        case 'Rules':
            PageHTML += "<div class='wrapper' id='wrapper'>" +
                            "<div class='rules-logo'>" +
                                "<img src='img/little-frog.png' alt='little-frog'>" +
                            "</div>" +
                            "<div class='rules'>" +
                                "<div class='rules-heading'>" +
                                    "<h1>Rules</h1>" +
                                "</div>" +
                                "<div class='rules-info'>" +
                                    "<p>" +
                                        "Лягушка должна добраться до другого берега реки.\n" +
                                        "Пользователь управляет лягушкой с помощью стрелок на клавиатуре (или с помощью touch - для устройств с\n" +
                                        "поддержкой touch). На старте игры лягушка находится в безопасной зоне по которой она может передвигаться\n" +
                                        "влево и вправо по полю. На пути лягушки будет дорога, по которой едут машины с разной скоростью.\n" +
                                        "Дальше, после дороги река. Между дорогой и рекой также есть безопасная зона. Река постоянно движется(течёт).\n" +
                                        "По реке плывут островки на которые лягушка должна запрыгнуть. Прыгнул мимо - проиграл. Не успел - проиграл,\n" +
                                        "сбила машина - проиграл. Добрался до другого берега реки - выиграл(получил очко). Среди игроков будет\n" +
                                        "рейтинг." +
                                    "</p>" +
                                "</div>" +
                            "</div>" +
                            "<div class='buttons'>" +
                                "<button class='btn' id='btn-rules' onclick='SwitchToMainPage()'>Main Page</button>" +
                            "</div>" +
                        "</div>";
            break;
        case 'Records':
            PageHTML += "<div class='wrapper' id='wrapper'>" +
                            "<div class='records-logo'>" +
                                "<img src='img/little-frog.png' alt='little-frog'>" +
                            "</div>" +
                            "<div class='records'>" +
                                "<div class='records-heading'>" +
                                    "<h1>Records</h1>" +
                                "</div>" +
                                "<div class='records-info'>" +
                                    "<div class='user-name'><span>Name</span></div>" +
                                    "<div class='user-score'><span>Score</span></div>" +
                                "</div>" +
                            "</div>" +
                            "<div class='buttons'>" +
                                "<button class='btn' id='btn-records' onclick='SwitchToMainPage()'>Main Page</button>" +
                            "</div>" +
                        "</div>";
            break;
        case 'About game':
            PageHTML += "<div class='wrapper' id='wrapper'>" +
                            "<div class='rules-logo'>" +
                                "<img src='img/little-frog.png' alt='little-frog'>" +
                            "</div>" +
                            "<div class='history'>" +
                                "<div class='history-heading'>" +
                                    "<h2>About Game</h2>" +
                                "</div>" +
                                "<div class='history-info'>" +
                                    "<h3>History</h3>" +
                                "</div>" +
                                "<div class='history-text'>" +
                                    "<p>" +
                                        "Frogger - видеоигра жанра аркада-головоломка, разработанная\n" +
                                        "компанией Konami и выпущенная компаниями Sega и Gremlin Industries\n" +
                                        "для аркадных автоматов в июне 1981 года в Японии и в октябре того же\n" +
                                        "года в Европе. Игра стала очень популярной и продолжает переиздаваться\n" +
                                        "для многих игровых систем и компьютеров." +
                                    "</p>" +
                                    "<p>" +
                                        "Различные версии игры выходили и продолжают выходить на многих игровых\n" +
                                        "системах и персональных компьютерах. В целом Frogger получил очень высокие,\n" +
                                        "часто даже максимально высокие оценки во многих рецензиях. Сравнительно\n" +
                                        "невысоко были оценены версии игры для Xbox 360, Atari 5200 и Intellivision." +
                                    "</p>" +
                                "</div>" +
                            "</div>" +
                            "<div class='buttons'>" +
                                "<button class='btn' id='btn-about' onclick='SwitchToMainPage()'>Main Page</button>" +
                            "</div>" +
                        "</div>";
            break;
        case 'New game':
            PageHTML += "<div class='game' id='game'>" +
                            "<canvas id='canvas1'></canvas>" +
                            "<canvas id='canvas2'></canvas>" +
                            "<canvas id='canvas3'></canvas>" +
                            "<div class='buttons'>" +
                                "<button class='btn' onclick='SwitchToMainPage()'>Main Page</button>" +
                            "</div>" +
                            "</div>";



            /*LoadScript('start-game.js');*/
            LoadScript('game/setup.js');
            LoadScript('game/frog.js');
            LoadScript('game/objects.js');
            LoadScript('game/utilities.js');
            break;
    }
    document.body.innerHTML = PageHTML;

}
function SwitchToState(NewStateH) {
    location.hash = encodeURIComponent(JSON.stringify(NewStateH));
}
function SwitchToMainPage() {
    SwitchToState({ pagename: 'Main'} );
}
function SwitchToRulesPage() {
    SwitchToState({ pagename: 'Rules'} );
}
function SwitchToRecordsPage() {
    SwitchToState({ pagename: 'Records'} );
}
function SwitchToAboutPage() {
    SwitchToState({ pagename: 'About game'} );
}
function SwitchToNewGamePage() {
    SwitchToState({ pagename: 'New game'} );
}
function LoadScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

function initScripts(scripts) {
    for(var i = 0; i < scripts.length; i++) {
        var script = document.createElement('script');
        script.src = 'game/' + scripts[i];
        document.body.appendChild(script);
    }
}