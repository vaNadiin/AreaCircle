'use strict';
class Circle {
	#radius;
	constructor(radius) {
		this.#radius = radius;
	}

	getSquareCircle() {
		let SquareCircle = Math.PI * Math.pow(this.#radius, 2);
		return SquareCircle;
	}
}

let circle = new Circle('2');
console.log(circle.getSquareCircle());