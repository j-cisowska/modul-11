function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
		console.log("This is " + this.brand + " phone." + " It is " + this.color + " and it cost " + this.price + "$" + ".");
}

var iPhone6S = new Phone("Apple", 2250, "gold");
iPhone6S.printInfo();

var galaxyS6 = new Phone("Samsung", 400, "black");
galaxyS6.printInfo();

var xiaomi4C = new Phone("Xiaomi", 200, "white");
xiaomi4C.printInfo();