function goToRules() {
    document.location.href = '../rules-page/rules.html';
}
function gotoRecords() {
    document.location.href = '../records-page/records.html';
}

var audio = document.getElementById('sound');
document.addEventListener('DOMContentLoaded', function () {
    audio = new Audio().play();
    console.log(audio);
})




