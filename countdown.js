setTimeout(function() {

	var countdownDiv = document.getElementById("countdown-to-atchoy");

	// var atchoyDate = new Date("November 26, 2022 GMT");
	var atchoyDate = new Date("January 31, 2017 GMT");
	var today = new Date();

	var daysLeft = Math.floor( (atchoyDate.getTime() - today.getTime()) / 86400000 );

	var yearsRemaining = Math.floor(daysLeft / 365);
	var daysRemaining = Math.floor(daysLeft % 365);

	var yearsRemainingText = yearsRemaining > 1 ? yearsRemaining + " years" : 
		(yearsRemaining > 0 ? yearsRemaining + " year" : "");

	var daysRemainingText = daysRemaining > 1 ? daysRemaining + " days" : 
		(daysRemaining > 0 ? daysRemaining + " day" : "");

	if (yearsRemaining > 0 && daysRemaining > 0) {
		yearsRemainingText += " and ";
	}

	var fullText = daysLeft > 0 ? "\\______" + yearsRemainingText + daysRemainingText + " to go______/" : "Get ready to party!";

	countdownDiv.innerHTML = fullText;

}, 1000);