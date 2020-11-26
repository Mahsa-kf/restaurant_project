
window.onload = function () {

    // Get all collapse-btn element and put them in an array
    var collapseBtn = document.getElementsByClassName("collapse-btn");

    // Create listener for all collapse buttons
    for (var i = 0; i < collapseBtn.length; i++) {
        collapseBtn[i].onclick = onCollapseClicked;
    }

    function onCollapseClicked() {
        // Get the content of clicked item
        var collapsedContent = this.nextElementSibling;

        if (collapsedContent.style.display == "none") {
            // Show collapse content
            collapsedContent.style.display = "block";
            // Change the collapse icon to "-"
            this.innerText = '-';
            this.style.fontSize = '30px';
        } else {
            // Hide collapse content
            collapsedContent.style.display = "none";
            // Change the collapse icon to "+""
            this.innerText = '+';
            this.style.fontSize = '22px';
        }
    }

}