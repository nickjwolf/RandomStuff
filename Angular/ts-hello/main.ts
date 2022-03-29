

class Point { 
     
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


let point  = new Point(1,2);
let x = point.x;
point.draw();



// interface Point { // Interfaces in Pascal Naming convetions --> Upper starting letter
//     x: number,
//     y: number
//     draw: () => void

// }


// let drawPoint = (point: Point) => {
//     //...
// }


// let getDistance = (point A: Point, pointB : Point){
//     // :...
// }



// drawPoint({
//     x: 1, y:2
// })





// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false];


// const colorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2; 

// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
// let BackgroundColor = Color.Red;

// //let message = 'abc';
//  let message;
//  message = 'abc';

// //var endwithc = (<string>message).endsWith('c');
// var endwithc = (message as string).endsWith('c');





// let count = 5;
// count = 'a';




// function log(message) {
//     console.log(message);
// }

// var message = 'Hello World';
// log(message);

// var number = 1;
// let count = 2;

// doSomething();


// // dosen't work
// function doSomething(){
//     for (let i = 0; i < 5; i++)
//     {
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }


// works 
// function doSomething(){
//     for (var i = 0; i < 5; i++)
//     {
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }