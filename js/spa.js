'use strict'
window.onhashchange = SwitchToStateFromURLHash;

function SwitchToStateFromURLHash() {
    let hash = window.location.hash;
    let State = decodeURIComponent(hash.substr(1));

    if (State !== "")
        State = JSON.parse(State);
    else
        State = {pageName: 'Main'};
    document.getElementById('wrapper').innerHTML = '';

    switch (State.pageName) {
        case 'Main':
            initMainPage();
            localStorage.clear();
            break;
        case 'Rules':
            initRulesPage();
            break;
        case 'Records':
            initRecordsPage();
            break;
        case 'About Game':
            initAboutGamePage();
            break;
        case 'New Game':
            initGame();
            break;
    }
}
function SwitchToState(State) {
    location.hash = encodeURIComponent(JSON.stringify(State));
}
function SwitchToMainPage() {
    SwitchToState({ pageName: 'Main'} );
}
function SwitchToRulesPage() {
    SwitchToState({ pageName: 'Rules'} );
}
function SwitchToRecordsPage() {
    SwitchToState({ pageName: 'Records'} );
}
function SwitchToAboutPage() {
    SwitchToState({ pageName: 'About Game'} );
}
function SwitchToNewGamePage() {
    SwitchToState({pageName: 'New Game'} );
    document.location.reload();
}
SwitchToStateFromURLHash();

let canvas = document.getElementById('canvas1');
let ctx1 = canvas.getContext('2d');

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');

let canvas4 = document.getElementById('canvas4');
let ctx4 = canvas4.getContext('2d');
