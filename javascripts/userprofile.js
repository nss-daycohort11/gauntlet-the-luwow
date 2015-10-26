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
console.log("Looking for myUser.class", myUser);


console.log("uer profile object within click function:", myUser);

});

$(".class__link").click(function(e){

	var Pathname = e.currentTarget.childNodes[3].innerHTML;
	myUser.class = new classIndex[Pathname]();
	console.log("what's the class:", myUser.class);


});

$(".weapon__link").click(function(e){

	var Pathname = e.currentTarget.childNodes[3].innerHTML;
	myUser.weapon = new weaponIndex[Pathname]();
	console.log("what's the weapon:", myUser.weapon);


});



});


