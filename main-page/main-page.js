function startGame() {
    document.location.href = '../game/game.html';
}
function goToRules() {
    document.location.href = '../rules-page/rules.html';
}
function gotoRecords() {
    document.location.href = '../records-page/records.html';
}
function goToAboutGame() {
    document.location.href = '../about-game-page/about-game.html';
}
var audio = document.getElementById('sound');
document.addEventListener('DOMContentLoaded', function () {
    audio = new Audio().play();
    console.log(audio);
})




