$(document).ready(function() {

var Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }

 this.setWeapon = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

    // Get the string at the index
    var randomWeapon = this.allowedWeapons[random];

    // Composes the corresponding player class into the player object
    this.weapon = new window[randomWeapon]();
    return this.weapon;
  }


};

Orc.prototype = new Monster();



  var myOrc = new Orc();
  var orcClass = myOrc.generateClass();
  var orcWeapon = myOrc.setWeapon();
// new BroadSword()

  $("#monster-name").html("The Orc");
  $("#monster-class").html(orcClass.name);
  $("#monster-weapon").html(orcWeapon.name);






});