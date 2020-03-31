import { HostListener } from '@angular/core';

export enum KEY_CODE {
    UP_ARROW = 38,
    DOWN_ARROW = 40,
    RIGHT_ARROW = 39,
    LEFT_ARROW = 37
};

export class ActionKey {
    //@HostListener('window:keyup', ['$event'])
    keyEvent(code:number) {
        switch(code){
            case KEY_CODE.LEFT_ARROW:
                console.log("go left");
                break;
            case KEY_CODE.RIGHT_ARROW:
                console.log("go right");
                break;
            case KEY_CODE.UP_ARROW:
                console.log("go up");
                break;
            case KEY_CODE.DOWN_ARROW:
                console.log("go down");
                break;
            default:
                console.log("Nothing to do");
                //do nothing
        }
    }
  }