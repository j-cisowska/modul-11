// https://codepen.io/anon/pen/EbwBZG?editors=1011

$(document).ready(function(){

function Button(text) {
this.text = text || "Hello";
}

Button.prototype = {
	create: function() {
    var self = this;
		this.$element = $('<button>');
    this.$element.text(this.text);
    this.$element.appendTo($('body'));
    this.$element.click(function() {
	alert(self.text);
    });
	}
}
  var btn1 = new Button('Click!');
  btn1.create();
});

