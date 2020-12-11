$(document).ready(function () {

	initMap;

});

function initMap() {
	var location = { lat: 43.650610, lng: -79.378270 };
	var map = new google.maps.Map(document.getElementById("map"),
		{
			zoom: 16,
			center: location
		});
	var marker = new google.maps.Marker(
		{
			position: location,
			map: map
		});
}




