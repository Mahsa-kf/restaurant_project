window.onload = function(){
	
	//Declares variables
		var sections = [s_general];
		var validators = [validateGeneral];
		var activeIndex = 0;

// Set Up Listener onsubmit button
// run the section in Validators 
//( Original, is to show different section as it validate page by page, 
//decide to reduce it, but want to keeep partial of the code)

formHandle.submit_btn.onclick = processForm;
//CREATE FUNCTION(S)
function processForm() {
	var isCurrentSectionValid = validators[activeIndex]();
	if (isCurrentSectionValid) {
		sections[activeIndex].style.display="none";
		++activeIndex;
		if (activeIndex < sections.length) {
			sections[activeIndex].style.display="block";
		} else {
			showThankYou();
		}
	}
}




/*window.onload = function(){

  document.getElementById('lunch').style.display = "block";


}

function openMenus(evt, menuItem) {
// Declare all variables
var i;
var tabcontent;
var tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(menuItem).style.display = "block";
evt.currentTarget.className += " active";
}*/
