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

function Pizza(size, toppings, numPizzas, phoneNumber) {
  this.size = size;
  this.toppings = toppings;
  this.numPizzas = numPizzas;
  this.phoneNumber = phoneNumber
}

Pizza.prototype.getPrice = function() {
  var price = 0;

  if(this.size === "small") {
      price = 12;
  } else if (this.size === "medium") {
      price = 14;
  } else if (this.size === "large") {
      price = 16;
  }

  if (this.toppings === 2) {
    price += 2;
  } else if (this.toppings === 1) {
    price += 1;
  } else {
    
  }
  price *= this.numPizzas;
  return price;
}

// User Interface Logic

var totalOrder = new TotalOrder();

function displayPizzaDetails(totalOrderToDisplay) {
  var pizzasList = $("#show-pizza");
  var htmlForPizzaInfo = "";
  totalOrderToDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.Size + " " + pizza.toppings + " " + pizza.numPizzas + " " + pizza.phoneNumber + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
};

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var inputedPieSize;
    $("input:checkbox[name=pie-size]:checked").each(function() {
      inputedPieSize = $(this).val();
      console.log(inputedPieSize);
    });
    var inputedPizzaToppings;
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      inputedPizzaToppings = $(this).val();
      console.log(inputedPizzaToppings);

    });
    var inputtedPhoneNumber = $("input#phone-number").val();
    console.log(inputtedPhoneNumber);
    var newPizza = new Pizza(inputedPieSize,inputedPizzaToppings, inputtedPhoneNumber);
    totalOrder.addPizza(newPizza);
    displayPizzaDetails(totalOrder); 
    console.log(totalOrder);
  });
});