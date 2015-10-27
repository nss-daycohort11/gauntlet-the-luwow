$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
/*  var warrior = new Human();
  warrior.setWeapon(new WarAxe());
  warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());

  var orc = new Orc();
  orc.generateClass();
  orc.setWeapon(new BroadSword());
  console.log(orc.toString());
*/
  /*
    Test code to generate a spell
   */
/*  var spell = new Sphere();
  console.log("spell: ", spell.toString());
*/

  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
//
// create myOrc and myUser (userprofile)
//
var classIndex = {
  "warrior" : Warrior,
  "valkyrie" : Valkyrie,
  "berserker": Berserker,
  "monk": Monk,
  "wizard": Wizard,
  "sorcerer": Sorcerer,
  "conjurer": Conjurer,
  "thief": Thief,
  "ninja": Ninja,
  "assassin": Assassin
};

var weaponIndex = {
  "dagger" : Dagger,
  "broadsword" : BroadSword,
  "waraxe": WarAxe
};


var User = function() {

};
User.prototype = new Human();
// Makes new Obj for user
var myUser = new User();
$("#name-submit").click(function(){

myUser.playerName = $("#player-name").val();

  //User Profile
  $("#user-name").html($("#player-name").val());

});


//Listening for class and populating myUser
$(".class__link").click(function(e){

  var Pathname = e.currentTarget.childNodes[3].innerHTML;
  myUser.class = new classIndex[Pathname]();

  //User Profile
  $("#current-class").html(Pathname);


});

//Listening for weapon and populating myUser
$(".weapon__link").click(function(e){

  var Pathname = e.currentTarget.childNodes[3].innerHTML;
  myUser.weapon = new weaponIndex[Pathname]();

  //User Profile
  $("#current-weapon").html("<p>" + myUser.weapon + "</p>");

});

//
// myOrc profile
//



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

console.log("info on orc", myOrc, orcClass, orcWeapon);

// User and Enemy stats load on enter.battlefield button

// User hits attack button
//    my User attacks

var attack = function () {
/*  console.log("userAttack stuff", myOrc, myUser);
  console.log("userAttack specifics", myUser.health, myUser.strength, myUser.weapon.damage);
  console.log("myOrc specifics", myOrc.health, myOrc.strength, myOrc.weapon.damage);*/
  
  myOrc.health = myOrc.health - ((myUser.strength/10) + myUser.weapon.damage);
  myUser.health = myUser.health - ((myOrc.strength/10) + myOrc.weapon.damage);
  console.log("afterfight", myOrc.health, "afteruser", myUser.health);
    if(myOrc.health <=0) {
      console.log("Orc dies.");
    }
    if (myUser.health <=0) {
      console.log("You enter the happy nothing.");
    }

  // myOrc.health = myOrc.health - (myUser.strength/10) + myUser.weapon.damage;
};


$("#attack").click(attack);
  



//    myOrc attacks



// Create fight
// Fight resolution
// How do the childNodes work, why 3?
// UserProfiles shouldn't progress to next card without selecting a class, weapon, etc
// On attack - using userAttack() and monsterAttack() should use the same function (using this.damage etc)?



});