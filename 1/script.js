'use strict';
class Circle {
	#radius;
	constructor(radius) {
		this.#radius = radius;
	}

	getAreaCircle() {
		let areaCircle = Math.PI * Math.pow(this.#radius, 2);
		return areaCircle;
	}
}

let circle = new Circle('3');
console.log(circle.getAreaCircle());