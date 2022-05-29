'use strict'
export class InputHandler {
    constructor() {
        window.addEventListener('keydown', (e) => {
            keys = [];
            keys[e.keyCode] = true;
            if (keys[37] || keys[38] || keys[39] || keys[40]) {
                frog.jump();
            }
        });

        window.addEventListener('keyup', (e) => {
            delete keys[e.keyCode];
            frog.moving = false;
        });
    }
}

//new InputHandler();
