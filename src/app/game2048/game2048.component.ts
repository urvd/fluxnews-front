import { Component, OnInit, HostListener, OnChanges, Output, Input } from '@angular/core';
import { ActionKey } from '../action';
import { LEVELS, Grille, Case, Coord } from '../Models/gameSet';
import { Play2048Service } from '../services/play2048/play2048.service';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-game2048',
  templateUrl: './game2048.component.html',
  styleUrls: ['./game2048.component.scss']
})
export class Game2048Component implements OnInit, OnChanges {

  actionKey: ActionKey;
  keyValue:string;
  score:number;
  levels:string[];
  displayGame:boolean;
  chosenLevel:number;
  gameSubs:Subscription;
  testval:string;
  val:Coord[];
  constructor(private game2048Service:Play2048Service) { }

  ngOnInit(): void {
    this.keyValue = "";
    this.levels = LEVELS;
    this.score = 0;
    this.displayGame = false;
    this.chosenLevel = 4;
//    this.startGame();
    console.log("level choose init: " + this.chosenLevel);
  }
  ngOnChanges(){        
    console.log("level choose on change: " + this.chosenLevel);
    console.log("level choose on change: " + this.val);
    // this.game2048Service.initGame(this.chosenLevel).subscribe( c =>{
    //   this.grille = c.cases;
    // });
  }

  lenght = function(nb:number):any{
    const list = [];
    for(let i = 0;i< nb;i++){
      list.push(i);
    }
    return list;
  }

  startGame(){
    this.game2048Service.initGame(this.chosenLevel).subscribe( c =>{
      this.val = c.coordonnee;
    });
    console.log("level choose on click: " + this.val);
    //this.grille = this.game2048Service.getCaseValue(this.grille);
  
  }

  @HostListener('window:keydown', ['$event']) 
  keyPress(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    console.log(event + " " + event.keyCode);
    this.keyValue = event.key;
    this.actionKey.keyEvent(event.keyCode);
  }

  onClickLevel(value:any){
    this.chosenLevel = value
    if(this.chosenLevel != 0 || this.chosenLevel != null){
      this.displayGame = true
      this.testval = this.chosenLevel.toString() + " is chosen.";
      this.startGame()
      console.log("level choose on click: " + this.val);
      //this.grille = this.game2048Service.getCaseValu;e(this.grille);
    }
  }
}
