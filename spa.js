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
    //document.location.reload();
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
