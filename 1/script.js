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

	getСircumference() {
		let circumference = 2 * Math.PI * this.#radius;
		return circumference;
	}
}

let circle = new Circle('3');
console.log(circle.getAreaCircle());
console.log(circle.getСircumference());