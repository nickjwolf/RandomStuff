export class Point { 
     
    //  private y: number;
    //  private x: number;
    
    //  constructor(x?: number, y?: number) {
    //      this.x = x;
    //      this.y = y;
    //  }

    constructor(private _x?: number, private _y?: number) {
        // creates class variables x and y and uses this.x = x
    }


    public draw() {
        console.log('X '+  this._x + ', Y: ' + this._y);
    }
    

    get x(){
        return this._x;
    }

    set x(value) {
        if(value < 0)
            throw new Error('value can not be less then 0')
        else{
                this._x = value;
            }
    }

}