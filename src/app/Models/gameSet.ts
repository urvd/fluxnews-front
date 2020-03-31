
export class Case{
    public value:string;
    public empty:boolean;

    constructor(){
        this.value = "-"; 
        this.empty = true;
    }

    setEmpty(){
        if(this.empty == false){
            this.value = "-"; 
            this.empty = true;
        }            
    }
    setValue(value:string){
        this.value = value;
        this.empty = false;
    }
}
export const VALUE_SET = [2,4];
export const LEVELS = ["3","4","5"];

export interface Coord{
    x: number;
    y: number;
    point:Case;
}

export class Grille {
    coordonnee:Coord[];
    taille:number;

    constructor(t:number){
        this.taille = t;
        if(t==0){
            this.coordonnee = null;
        }else{
            //let coor = new Coord();
            
            for(let i = 0;i < t;i++){
                for(let j = 0;i < t;i++){
                    var x  = i; 
                    var y = j;
                    var point = new Case();;
                    this.coordonnee.push( Object.assign({x: i}, {y: j}, {point:new Case()}));                    
                }
            }
            this.setRandomValueAtPosition(true);
        }
       
        // this.cases.forEach(c => {
        //     c.forEach(cc => {
        //         cc.setEmpty();
        //     });
        // });
    }

    getRandomValue():number{
        return VALUE_SET[Math.floor(Math.random() * VALUE_SET.length)];
    }

    private randomPosition():number{
        return Math.random() * (this.taille + 1) + 1;
    }

    private randomCoordonnee():number{
        var t2 = this.taille *2;
        return Math.random() * (t2+ 1) + 1;
    }

    setRandomValueAtPosition(isStart:boolean){
        if(isStart){
            let a = this.coordonnee[this.randomCoordonnee()];
            let b = this.coordonnee[this.randomCoordonnee()];

            do{
                let a = this.coordonnee[this.randomCoordonnee()];
                let b = this.coordonnee[this.randomCoordonnee()];
            }while(a.x == b.x && b.x == b.y);    
            a.point.setValue(this.getRandomValue().toString()) ;
            b.point.setValue(this.getRandomValue().toString()) ;
        }else{
            let a = this.coordonnee[this.randomCoordonnee()];
            let b = this.coordonnee[this.randomCoordonnee()];

            do{
                let a = this.coordonnee[this.randomCoordonnee()];
            }while(!a.point.empty);     
            a.point.setValue(this.getRandomValue().toString()) ;
        }
    }

    setValue(n:number,i:number, j:number, value:string){
        let m = this.coordonnee[n];
        m.x = i;
        m.y = j;
    }
    getCase(n:number):Coord{
        return this.coordonnee[n];
    }
}