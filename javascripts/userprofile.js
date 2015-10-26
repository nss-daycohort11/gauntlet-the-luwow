$(document).ready(function() {


var userProfile = function(){
}

userProfile.prototype = new Human();

$("#name-submit").click(function(){
console.log("User Name", $("#player-name").val());
});




});


