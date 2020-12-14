window.onload = function(){
	
	//Declares variables
		var form_container = document.getElementById("giftCardForm");
		var submit_container = document.getElementsByClassName("submit_container");
		var submitconfirm = document.getElementById("thanks_msg");
		var s_general = document.getElementById("general");
		var formHandle = document.forms.form_giftcard;
		var f_Amount = document.getElementById("amount");
		var f_Quantity = document.getElementById("quantity");
		var f_Recipient_Name = document.getElementById("recipient_name");
		var f_Sender_Name = document.getElementById("sender_name");
		var f_message = document.getElementById("message");
		var regEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
		var f_submit_btn =document.getElementById("submit_btn");
		var f_sender_Email =document.getElementById("cardholder_email_address");
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

//FORM VALIDATION FOR EACH FIELDS
function validateGeneral() {
	var flag = true;
	if(f_Amount.value === "amount-0"){
		f_Amount.style.borderColor = "red";
		f_Amount.focus();
		document.getElementById('amountHelp').innerHTML = 'Please select the amount for the gift card';
		flag = false;
	}
	if(f_Quantity.value === "quant-0"){
		f_Quantity.style.borderColor = "red";
		f_Quantity.focus();
		document.getElementById('quantityHelp').innerHTML = 'Please select the quantity of gift card';
		flag = false;
	}
	if(f_Recipient_Name.value === "" || f_Recipient_Name.value === null){
		f_Recipient_Name.style.borderColor = "red";
		f_Recipient_Name.focus();
		document.getElementById('recipientNameHelp').innerHTML = 'Please enter your recipient\'s name';
		flag = false;
	}
	if(f_Sender_Name.value === "" || f_Sender_Name.value === null){
		f_Sender_Name.style.borderColor = "red";
		f_Sender_Name.focus();
		document.getElementById('senderNameHelp').innerHTML = 'Please enter your name';
		flag = false;
	}
	if(!regEmail.test(f_sender_Email.value)){
		f_sender_Email.style.borderColor = "red";
		f_sender_Email.focus();
		document.getElementById('emailHelp').innerHTML = 'Please enter your email address';
		flag = false;
	}
	if(f_message.value === "" || f_message.value === null){
		f_message.style.borderColor = "red";
		f_message.focus();
		document.getElementById('messageHelp').innerHTML = 'Please enter your message';
		flag = false;
	}
	return flag;
}

//IF ALL FORMS FIELDS VALID, SHOW THE MESSAGE
function showThankYou() {
	form_container.style.display="none";
	submit_container[0].style.display="block";
	submitconfirm.style.display="block";
	submitconfirm.innerHTML= "Thank you <strong>" + f_Sender_Name.value + "</strong> for your purchase.<br/> Your total order is " + f_Quantity.value + " X $" + f_Amount.value + " = $" + (f_Quantity.value * f_Amount.value)+" . <br/>A confirmation email will be sent to <strong>" + f_sender_Email.value + "</strong> shortly.";
	f_submit_btn.style.display="none";

	return false;
}
  
};//END OF ONLOAD