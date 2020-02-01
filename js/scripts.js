// Business Logic
function Pizza(size) {
  this.size = size;
  this.meatToppings = [];
  this.vegToppings = [];
  
}

Pizza.prototype.addMeat = function(meat) {
  this.meatTopping.push(meat);
}

Pizza.prototype.addVeggie = function(veggie) {
  this.vegTopping.push(veggie);
}

Pizza.prototype.getPrice = function() {
  var price = 0;
  
  if(this.size === "small") {
    price = 12;
  } else if (this.size === "medium") {
    price = 14;
  } else if (this.size === "large") {
    price = 16;
  } else if (this.size === "extra large") {
    price = 18;
  }
  
  this.meatToppings.forEach(function() {
    price += 2;
  });
  
  this.vegTopping.forEach(function() {
    price += 1;
  });
  
  this.price = price;
  console.log(price);
}

function TotalOrder(name, phoneNumber) {
  this.pizzas = [];
  this.name = name;
  this.phoneNumber = phoneNumber;
}

TotalOrder.prototype.addPizza = function(pizza) {
  pizza.newPrice();
  this.pizzas.push(pizza);
}
TotalOrder.prototype.TotalPrice = function {
  var totalPrice = 0;
  this.pizzas.forEach(function(pizza) {
    totalPrice += pizza.price;
  });
  this.totalPrice = totalPrice;
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
  // console.log(pizzasList);
  
};

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var inputtedPieSize;
    $("input:checkbox[name=pie-size]:checked").each(function() {
      inputtedPieSize = $(this).val();
      // console.log(inputedPieSize);
    });
    var inputtedPizzaToppings;
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      inputtedPizzaToppings = $(this).val();
      // console.log(inputedPizzaToppings);

    });
    var inputtedPhoneNumber = $("input#phone-number").val();
    var inputtedNumPizzas = $("select#numPizzas").val();
    var newPizza = new Pizza(inputtedPieSize,inputtedPizzaToppings, inputtedPhoneNumber, numPizzas);
    totalOrder.addPizza(newPizza);
    displayPizzaDetails(totalOrder); 
    console.log(newPizza);
  });
});