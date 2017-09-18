function Phone(brand, price, color, system, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
	this.weight = weight;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It has " + this.system + " operating system and weighs "+ this.weight + "g.");
}

var iPhone6S = new Phone("Apple", 2250, "silver","Android", 145);
var SamsungGalaxyS6 = new Phone("Samsung", 2849, "black", "iOS", 140);
var OnePlusOne = new Phone("OnePlus", 3500, "white","Windows", 150);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();