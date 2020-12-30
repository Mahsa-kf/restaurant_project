window.onload = function(){

	document.getElementById('lunch').style.display = "block";
	document.getElementById('lunch_btn').style.backgroundColor = "#f1f1f1";
	
	//Declares variables
	  var lunch_btn = document.getElementById("lunch_btn");
		var daily_btn = document.getElementById("daily_btn");
		var birthday_btn = document.getElementById("birthday_btn");
		var lunch = document.getElementById("lunch");
		var daily = document.getElementById("daily");
		var birthday = document.getElementById("birthday");


// Set Up Listener onclick buttons
		lunch_btn.addEventListener("click", lunchShow);
		daily_btn.addEventListener("click", dailyShow);
		birthday_btn.addEventListener("click", birthdayShow);

//Create Functions

	function lunchShow() {
		document.getElementById('lunch_btn').style.backgroundColor = "#f1f1f1";

		lunch.style.display = "block"
		daily.style.display = "none"
		birthday.style.display = "none"
	}

	function dailyShow() {
		document.getElementById('lunch_btn').style.backgroundColor = "#ffffff";
		lunch.style.display = "none"
		daily.style.display = "block"
		birthday.style.display = "none"
	}

	function birthdayShow() {
		document.getElementById('lunch_btn').style.backgroundColor = "#ffffff";
		lunch.style.display = "none"
		daily.style.display = "none"
		birthday.style.display = "block"
	}

};//End of Onload Function


