$(document).ready(function() {

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
	$("#user-name").html("<p>" + $("#player-name").val() + "</p>");

});


//Listening for class and populating myUser
$(".class__link").click(function(e){

	var Pathname = e.currentTarget.childNodes[3].innerHTML;
	myUser.class = new classIndex[Pathname]();

	//User Profile
	$("#current-class").html("<p>" + Pathname + "</p>");


});

//Listening for weapon and populating myUser
$(".weapon__link").click(function(e){

	var Pathname = e.currentTarget.childNodes[3].innerHTML;
	myUser.weapon = new weaponIndex[Pathname]();

	//User Profile
	$("#current-weapon").html("<p>" + myUser.weapon + "</p>");

});


});


