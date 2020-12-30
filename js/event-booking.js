//Set date picker on eventDate field
//$(function () {
//   $("#eventDate").datepicker();   
//});// this code will cause date picker overlap the input field.


//To solve issue to let datepicker showed on right side of the input field, decide to use the code below.
//code reference from http://burnignorance.com/javascript-performance-tips/make-jquery-datepicker-to-popup-in-different-positions/
$('#eventDate').datepicker({
    beforeShow: function (textbox, instance) {
           instance.dpDiv.css({
            marginTop: (-textbox.offsetHeight) + 'px',
            marginLeft: textbox.offsetWidth + 'px'
        });
    }
});


//Set up listener on submit button
document.getElementById("submit_btn").addEventListener("click", function() {

    //Declare variables
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const event = document.getElementById("eventType");
    const eventDate = document.getElementById("eventDate");
    const details = document.getElementById("bookingDetails");
    const emailRegex = /\w+@\w+\.\w+/;
    const phoneRegex = /^\(?\d{3}\)?(-|\s)?\d{3}(-|\s)?\d{4}$/;
    const dateRegex = /^((0[1-9])|(1[0-2]))\/((0[1-9])|([1-2][0-9])|(3[0-1]))\/20[2-9]\d$/;
    let nameError = false;
    let emailError = false;
    let phoneError = false;
    let eventError = false;
    let eventDateError = false;
    let detailsError = false;

    //Create function to clear any previous error messages
    function clearErrors() {
        name.style.borderColor = 'black';
        email.style.borderColor = 'black';
        phone.style.borderColor = 'black';
        event.style.borderColor = 'black';
        eventDate.style.borderColor = 'black';
        details.style.borderColor = 'black';
        document.getElementById('namehelp').innerHTML = '';
        document.getElementById('emailhelp').innerHTML = '';
        document.getElementById('phonehelp').innerHTML = '';
        document.getElementById('eventhelp').innerHTML = '';
        document.getElementById('eventdatehelp').innerHTML = '';
        document.getElementById('bookinghelp').innerHTML = '';
        document.getElementById('submitconfirm').innerHTML = '';        
    }

    //Call function to clear previous error messages
    clearErrors();

    //Validate name input
    if (name.value === '') {
        nameError = true;
        name.style.borderColor = 'red';
        document.getElementById('namehelp').innerHTML = 'Please enter your name';
    }

    //Validate email input
    if (!emailRegex.test(email.value)) {
        emailError = true;
        email.style.borderColor = 'red';
        document.getElementById('emailhelp').innerHTML = 'Please enter your email address';
    }

    //Validate phone input
    if (!phoneRegex.test(phone.value)) {
        phoneError = true;
        phone.style.borderColor = 'red';
        document.getElementById('phonehelp').innerHTML = 'Please enter your phone number';
    }

    //Validate event type input
    if (event.value === 'none') {
        eventError = true;
        event.style.borderColor = 'red';
        document.getElementById('eventhelp').innerHTML = 'Please select an event type';
    }

    //Validate booking date input
    if (!dateRegex.test(eventDate.value)) {
        eventDateError = true;
        eventDate.style.borderColor = 'red';
        document.getElementById('eventdatehelp').innerHTML = 'Please enter your booking date';
    }

    //Validate booking details
    if (details.value === '') {
        detailsError = true;
        details.style.borderColor = 'red';
        document.getElementById('bookinghelp').innerHTML = 'Please tell us about your event or function';
    } 

    //Evaluate the status of error flags and output either a confirmation message or error notice
    if (!nameError && !emailError && !phoneError && !eventError && 
            !eventDateError && !detailsError) {
        clearErrors();        
        document.getElementById("events").style.display ="none";
        document.getElementsByClassName("submit_container")[0].style.display ="block";
        document.getElementById('submitconfirm').innerHTML = 'Thank you for your inquiry. A staff member will contact you shortly.';
    } else {
        document.getElementById('submitconfirm').innerHTML = 'Your form was not submitted. Please provide the necessary information and resubmit.';
    }

});