// Business Logic
function TotalOrder() {
  this.pizzas = []
  this.currentId = 0;
}

TotalOrder.prototype.addPizza = function(pizza) {
  pizza.Id = this.assignId();
  this.pizzas.push(pizza);
}

TotalOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TotalOrder.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    };
  return false;
}

function Pizza(size,toppings, numPizzas){
  this.size = size;
  this.toppings = toppings;
  this.numPizzas = numPizzas;
}

Pizza.prototype.yourPizza = function() {
  return this.size + " " + this.toppings + " " + this.numPizzas;
}


// User Interface

var totalOrder = new TotalOrder();

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=pie-size]:checked").each(function() {
      var pieSize = $(this).val();
    })
  });
});