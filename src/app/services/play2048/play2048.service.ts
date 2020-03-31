import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grille, Case, Coord } from 'src/app/Models/gameSet';

@Injectable({
  providedIn: 'root'
})
export class Play2048Service {

  game:Observable<any>;
  constructor() { }

  initGame(level:number):Observable<Grille>{
    this.game.subscribe(obs => {
      if(level != 0 ){
        obs = new Grille(level);
        console.log("obs = "+ obs.coordonnee);
      }
      
    });
    return this.game;
  }

   getCaseValue(gameCases:Coord[]):any{
     let varr = [];
    this.game.subscribe(n => {
      gameCases = n.coordonnee ;
    });
    return gameCases;
   }



}

