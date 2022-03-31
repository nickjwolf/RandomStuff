"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    //  private y: number;
    //  private x: number;
    //  constructor(x?: number, y?: number) {
    //      this.x = x;
    //      this.y = y;
    //  }
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // creates class variables x and y and uses this.x = x
    }
    Point.prototype.draw = function () {
        console.log('X ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value can not be less then 0');
            else {
                this._x = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
