
window.onload = function () {

    
    // Get all collapseTitle element and put them in an array
    var collapseTitle = document.getElementsByClassName("collapsible-title");

    // Create listener for all collapse buttons
    for (var i = 0; i < collapseTitle.length; i++) {
        collapseTitle[i].onclick = onTitleClicked;
    }

    function onTitleClicked() {
        // Get the content of clicked item
        var collapsedContent = this.nextElementSibling;

        if (collapsedContent.style.display === "none" || collapsedContent.style.display === "") {
            // Show collapse content
            collapsedContent.style.display = "block";
            this.children[1].style.transform = "none";
        } else {
            // Hide collapse content
            collapsedContent.style.display = "none";
            //Rotate the collapse icon 180 degrees to make it expand the icon
            this.children[1].style.transform = "rotateX(180deg)";

        }
    }

}