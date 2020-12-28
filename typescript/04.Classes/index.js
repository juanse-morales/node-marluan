"use strict";
// Clases
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.tomate = false;
        this.cheese = "";
        this.bacon = false;
        this.otherIngredients = [""];
    }
    Pizza.prototype.setCheese = function (cheese) {
        this.cheese = cheese;
        return this;
    };
    Pizza.prototype.setBacon = function () {
        this.bacon = true;
        return this;
    };
    Pizza.prototype.setOtherIngredients = function (ingredients) {
        this.otherIngredients = ingredients;
        return this;
    };
    Pizza.prototype.build = function () {
        return this;
    };
    return Pizza;
}());
var pepperoniPizza = new Pizza();
pepperoniPizza.setBacon().setCheese('Mozzarella').setOtherIngredients(["tomato"]).build();
console.log(pepperoniPizza);
