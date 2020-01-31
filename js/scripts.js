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

function displayPizzaDetails(totalOrderToDisplay) {
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  totalOrderToDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.Size + " " + pizza.toppings + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
};

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=pie-size]:checked").each(function() {
      var checkedPieSize = $(this).val();
      console.log(checkedPieSize);
      
    });

  $("input:checkbox[name=pizza-toppings]:checked").each(function() {
    var checkedPizzaToppings = $(this).val();
    console.log(checkedPizzaToppings);
    
  });
    var inputtedPhoneNumber = $("input#phone-number").val();
    var newPizza = new Pizza(checkedPieSize, checkedPizzaToppings,numPizzas, inputtedPhoneNumber);
    totalOrder.addPizza(newPizza);
    displayPizzaDetails(totalOrder);
  
  });
});