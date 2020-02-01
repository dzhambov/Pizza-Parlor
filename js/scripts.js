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
}

function TotalOrder(name, phoneNumber) {
  this.pizzas = [];
  this.name = name;
  this.phoneNumber = phoneNumber;
}

TotalOrder.prototype.addPizza = function(pizza) {
  // pizza.newPrice();
  this.pizzas.push(pizza);
}
TotalOrder.prototype.TotalPrice = function() {
  var totalPrice = 0;
  this.pizzas.forEach(function(pizza) {
    totalPrice += pizza.price;
  });
  this.totalPrice = totalPrice;
  console.log(totalPrice);
  
}

// User Interface Logic

var totalOrder = new TotalOrder();


$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var pieSize = [];
    $("input:checkbox[name=pie-size]:checked").each(function() {
      var inputtedPieSize = $(this).val();
      pieSize.push(inputtedPieSize);
    });
    var meatToppings = [];
    $("input:checkbox[name=meat-toppings]:checked").each(function() {
      var inputtedMeatToppings = $(this).val();
      meatToppings.push(inputtedMeatToppings);
    });

    var inputtedPhoneNumber = $("input#phone-number").val();
    var newPizza = new Pizza(pieSize,meatToppings, inputtedPhoneNumber, numPizzas);
    totalOrder.addPizza(newPizza);
    console.log(newPizza);
  });
});