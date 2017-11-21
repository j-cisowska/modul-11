
$(document).ready(function() {

  function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
  
  function Column(name) {
    var self = this; // kontekst?

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
    	// tworzenie kolumn
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').addClass('btn btn-danger').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').addClass('btn btn-success').text('Add a card');
   
      // nasłuchiwacze
	  
	  //usunięcie kolumny
    $columnDelete.click(function() {
        self.removeColumn();
    });
	//dodanie karty w kolumnie
    $columnAddCard.click(function(event) {
        self.addCard(new Card(prompt("Enter the name of the card")));
    });
      
    // połączenie w jedno
      $column.append($columnTitle)
        .append($columnDelete)
        .append($columnAddCard)
        .append($columnCardList);

      // zwróć stworzoną kolumnę
      return $column;
      
      
    }//create column closing
   
  }//column name closing
  
    //dodanie karty w liście i połączenie
    Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);
    },
	//usunięcie kolumny
    removeColumn: function() {
      this.$element.remove();
    }
};
  

function Card(description) {
	var self = this; //kontekst?

    this.id = randomString();
    this.description = description;
    this.$element = createCard();

    function createCard() {
    	// składowe karty, tworzymy kartę
    var $card = $('<li>').addClass('card');
    var $cardDescription = $('<p>').addClass('card-description').text(self.description);
    var $cardDelete = $('<button>').addClass('btn-delete').addClass('btn btn-danger').text('x');
      // usunięcie karty
      $cardDelete.click(function(){
        self.removeCard();
});
      
      $card.append($cardDelete)
	.append($cardDescription);
return $card;
      
    }//create card closing
  
  Card.prototype = {
	removeCard: function() {
		this.$element.remove();
    }//remove card closing
	
}//card prototype closing
  
}//card description

//tablica 
var board = {
    name: 'Kanban Board',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
};
 
 function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
  
  $('.create-column')
  .click(function(){
	var name = prompt('Enter a column name');
	var column = new Column(name);
    	board.addColumn(column);
  });
  


})
//https://codepen.io/anon/pen/gXewEm