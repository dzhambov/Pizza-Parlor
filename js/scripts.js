// Business Logic

// Business logic for total order
function TotalOrder(name, phoneNumber) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.pizzas = [];
  this.currentId = 0;
}

TotalOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

TotalOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business logic for pizza 
function Pizza(size) {
  this.size = size;
  this.meatToppings = [];
  this.vegToppings = [];
}

Pizza.prototype.addMeat = function(meat) {
  this.meatToppings.push(meat);
}

Pizza.prototype.addVeggie = function(veg) {
  this.vegToppings.push(veg);
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
  
  price;
}


TotalOrder.prototype.TotalPrice = function() {
  var totalPrice = 0;
  this.pizzas.forEach(function(pizza) {
    totalPrice += pizza.price;
    this.totalPrice = totalPrice;
    $("#order-summary").append(totalPrice);
  });
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
    var vegToppings = [];
    $("input:checkbox[name=veg-toppings]:checked").each(function() {
      var inputtedVegToppings = $(this).val();
      vegToppings.push(inputtedVegToppings);
    });
    
    var orderName = $("#name").val();
    var phoneNumber = $("input#phone-number").val(); 
    console.log(orderName,phoneNumber);
    
    var newPizza = new Pizza(pieSize);
      $("input:checkbox[name=meat-toppings]:checked").each(function() {
        newPizza.addMeat($(this).val());
      });
      $("input:checkbox[name=veg-toppings]:checked").each(function() {
        newPizza.addVeggie($(this).val());
      });
      $(".name").append(orderName);
      $(".phone-number").append(phoneNumber);
      totalOrder.addPizza(newPizza);
    console.log(newPizza);
    
  });
});