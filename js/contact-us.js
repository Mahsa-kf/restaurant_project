//Set up listener on submit button
document.getElementById("submit_btn").addEventListener("click", function(){

    //Declare variables
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const emailRegex = /\w+@\w+\.\w+/;
    const phoneRegex = /^\(?\d{3}\)?(-|\s)?\d{3}(-|\s)?\d{4}$/;
    let nameError = false;
    let emailError = false;
    let messageError = false;

    //Clear any previous error messages
    function clearErrors(){
        name.style.borderColor = 'black';
        email.style.borderColor = 'black';
        message.style.borderColor = 'black';
        phone.style.borderColor = 'black';
        document.getElementById('namehelp').innerHTML = '';
        document.getElementById('emailhelp').innerHTML = '';
        document.getElementById('messagehelp').innerHTML = '';
        document.getElementById('submitconfirm').innerHTML = '';        
    }

    clearErrors();

    //Validate name input
    if (name.value === '')
    {
        nameError = true;
        name.style.borderColor = 'red';
        document.getElementById('namehelp').innerHTML = 'Please enter your name';
    }

    //Validate email input
    if (!emailRegex.test(email.value))
    {
        emailError = true;
        email.style.borderColor = 'red';
        document.getElementById('emailhelp').innerHTML = 'Please enter your email address';
    }

    //Validate message input
    if (message.value === '')
    {
        messageError = true;
        message.style.borderColor = 'red';
        document.getElementById('messagehelp').innerHTML = 'Message field cannot be empty';
    } 

    //Evaluate the status of error flags and output either a confirmation message or error notice
    if (nameError === false && emailError === false && messageError === false)
    {
        clearErrors();        
        document.getElementById('submitconfirm').innerHTML = 'Thank you for your comments.';
    }
    else
        {
            document.getElementById('submitconfirm').innerHTML = 'Your form was not submitted. Please provide the necessary information and resubmit.';
        }

    });