//Make onclick listener for submit button 
document.querySelector("#submit_btn").onclick = function(){

    //Make variables and object to hold data from form
    var formHandler = document.forms.contactUsForm;
    var namebox = document.querySelector('#name');
    var emailbox = document.querySelector('#email');
    var messagebox = document.querySelector('#message');
    var namehelp = document.querySelector('#namehelp');
    var emailhelp = document.querySelector('#emailhelp');
    var messagehelp = document.querySelector('#messagehelp');
    var submitconfirm = document.querySelector('#submitconfirm'); 
    var formObject = {
        name: '',
        email: '',
        message: '',
        nameFlag: false,
        emailFlag: false,
        messageFlag: false
    };
    
    //Put values into object
    formObject.name = formHandler.name.value;
    formObject.email = formHandler.email.value;
    formObject.message = formHandler.message.value;

    //Delete old helper text
    namebox.style.borderColor = 'black';
    emailbox.style.borderColor = 'black';
    messagebox.style.borderColor = 'black';
    namehelp.innerHTML = '';
    emailhelp.innerHTML = '';
    messagehelp.innerHTML = '';
    submitconfirm.innerHTML = '';        

    //Checking name form data
    if (formObject.name === ''){
        formObject.nameFlag = true;
        namebox.style.borderColor = 'red';
        namehelp.innerHTML = 'Please enter your name';
    }

    //Checking email form data
    if (!((/\w+@\w+\.\w+/).test(formObject.email))){
        formObject.emailFlag = true;
        emailbox.style.borderColor = 'red';
        emailhelp.innerHTML = 'Please enter your email address';
    }

    //Checking text area data
    if (formObject.message === ''){
        formObject.messageFlag = true;
        messagebox.style.borderColor = 'red';
        messagehelp.innerHTML = 'Message field cannot be empty';
    } 

    //Make webpage show confirmation message if all information received, or show error message if more info is needed
    if (formObject.nameFlag === false && formObject.emailFlag === false && formObject.messageFlag === false){ 
        document.querySelector("#contact-us-form").style.display ="none";
        document.querySelector(".submit_container").style.display ="block";
        submitconfirm.innerHTML = 'Thank you for your comments.';
    }
    else{
        submitconfirm.innerHTML = 'Your form was not submitted. Please provide the necessary information and resubmit.';
    }
}