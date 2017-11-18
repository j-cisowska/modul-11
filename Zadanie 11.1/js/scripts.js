/************** MAIN INFO *************/
function Phone(brand, price, color, memory, materials, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.memory = memory;
  this.materials = materials;
  this.size = size;
}
Phone.prototype.printInfo = function() {
		console.log("This is " + this.brand + " phone." + " It is " + this.color + " and it cost " + this.price + "$" + ". " + this.brand + " has " + this.memory + "GB of memory and it's main material is " + this.materials + ". " + "It's " + this.size + " inches.");
}

/******** WHERE TO BUY ***********/
function Purchase(brand, shop, site) {
  this.brand = brand;
  this.shop = shop;
  this.site = site;
}

Purchase.prototype.printInfo = function() {
	console.log("You can purchase " + this.brand + " phone" + " in: " + this.shop  + " shop " + "or in the internet on " + this.site + ".");
}

/****** IPHONE *******/
var iPhone6S = new Phone("Apple", 2250, "gold", 128, "aluminum", 4.7);
var newiPhone6S = new Purchase ("Apple", "applestore", "eBay");
iPhone6S.printInfo();
newiPhone6S.printInfo();

/******** SAMSUNG ********/
var galaxyS6 = new Phone("Samsung", 400, "black", 64, "aluminum", 4.5);
var newgalaxyS6 = new Purchase ("Samsung", "Saturn", "Allegro");
galaxyS6.printInfo();
newgalaxyS6.printInfo();

/******** XIAOMI **********/
var xiaomi4C = new Phone("Xiaomi", 200, "white", 32, "plastic", 4.2);
var newxiaomi4C = new Purchase ("Xiaomi", "Media", "GearBest");
xiaomi4C.printInfo();
newxiaomi4C.printInfo()