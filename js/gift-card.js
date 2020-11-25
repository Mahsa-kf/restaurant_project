window.onload = function(){


  var giftCardForm = document.getElementById("giftCardForm");
  var thanks_msg = document.getElementById("thanks_msg");
  var s_general = document.getElementById("general");
  var s_shipping = document.getElementById("shipping");
  var s_payment = document.getElementById("payment");
  var s_billing = document.getElementById("billing");
  var formHandle = document.forms.form_giftcard;
  var f_Amount = document.getElementById("amount");
  var f_Quantity = document.getElementById("quantity");
  var f_Recipient_Name = document.getElementById("recipient_name");
  var f_Sender_Name = document.getElementById("sender_name");
  var f_message = document.getElementById("message");
  var f_Recipient_Fullname = document.getElementById("recipient_FullName");
  var f_Recipient_Number = document.getElementById("recipient_number");
  var f_Recipient_Address = document.getElementById("recipient_address");
  var f_Recipient_City = document.getElementById("recipient_city");
  var f_Recipient_Country = document.getElementById("recipient_country");
  var f_Shipping_province = document.getElementById("Shipping_province");
  var f_Shipping_postalcode = document.getElementById("Shipping_postalcode");
  var f_CardHolder_Fullname = document.getElementById("sender-nameoncard");
  var f_CardHolder_CardNumber = document.getElementById("sender-cardnumber");
  var f_Card_expiryMonth = document.getElementById("expiry-month");
  var f_Card_expiryYear = document.getElementById("expiry-year");
  var f_Card_CVV = document.getElementById("cvv");
  var regPc = /^\w\d\w\s?\d\w\d$/i;
  var regPn =/^[0-9]{10}$/;
  var regCn =/^[0-9]{16}$/;
  var regCvv = /^[0-9]{3}$/;
  var regEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  var f_CardHolder_address = document.getElementById("cardholder_address");
  var f_CardHolder_country = document.getElementById("cardholder_country");
  var f_CardHolder_province = document.getElementById("cardholder_province");
  var f_CardHolder_city = document.getElementById("cardholder_city");
  var f_CardHolder_postalcode = document.getElementById("cardholder_postalcode");
  var f_CardHolder_phoneNumber = document.getElementById("cardholder_phonenumber");
  var f_next_btn =document.getElementById("next_btn");
  var f_sender_Email =document.getElementById("cardholder_email_address");
  var sections = [s_general, s_shipping, s_payment, s_billing];
  var validators = [validateGeneral, validateShipping, validatePayment, validateBilling];
  
  var activeIndex = 0;
  
  //CREATE FUNCTION(S)
  formHandle.next_btn.onclick = processForm;
  
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
  
  function validateGeneral() {
    var flag = true;
    if(f_Amount.value === "amount-0"){
      f_Amount.style.background = "red";
      f_Amount.focus();
      flag = false;
    }
    if(f_Quantity.value === "quant-0"){
      f_Quantity.style.background = "red";
      f_Quantity.focus();
      flag = false;
    }
    if(f_Recipient_Name.value === "" || f_Recipient_Name.value === null){
      f_Recipient_Name.style.background = "red";
      f_Recipient_Name.focus();
      flag = false;
    }
    if(f_Sender_Name.value === "" || f_Sender_Name.value === null){
      f_Sender_Name.style.background = "red";
      f_Sender_Name.focus();
      flag = false;
    }
    if(!regEmail.test(f_sender_Email.value)){
      f_sender_Email.style.background = "red";
      f_sender_Email.focus();
      flag = false;
    }
    if(f_message.value === "" || f_message.value === null){
      f_message.style.background = "red";
      f_message.focus();
      flag = false;
    }
    return flag;
  }
  
  function validateShipping() {
    var flag = true;
    if(f_Recipient_Fullname.value === "" || f_Recipient_Fullname.value === null){
      f_Recipient_Fullname.style.background = "red";
      f_Recipient_Fullname.focus();
      flag = false;
    }
    if(!regPn.test(f_Recipient_Number.value)){
      f_Recipient_Number.style.background = "red";
      f_Recipient_Number.focus();
      flag = false;
    }
    if(f_Recipient_Address.value === "" || f_Recipient_Address.value === null){
      f_Recipient_Address.style.background = "red";
      f_Recipient_Address.focus();
      flag = false;
    }
    if(f_Recipient_City.value === "" || f_Recipient_City.value === null){
      f_Recipient_City.style.background = "red";
      f_Recipient_City.focus();
      flag = false;
    }
    if(f_Recipient_Country.value === "country-0"){
      f_Recipient_Country.style.background = "red";
      f_Recipient_Country.focus();
      flag = false;
    }
    if(f_Shipping_province.value === "province-0"){
      f_Shipping_province.style.background = "red";
      f_Shipping_province.focus();
      flag = false;
    }
    if(!regPc.test(f_Shipping_postalcode.value)){
      f_Shipping_postalcode.style.background = "red";
      f_Shipping_postalcode.focus();
      flag = false;
    }
    return flag;
  }
  function validatePayment() {
    var flag = true;
    if(f_CardHolder_Fullname.value === "" || f_CardHolder_Fullname.value === null){
      f_CardHolder_Fullname.style.background = "red";
      f_CardHolder_Fullname.focus();
      flag = false;
    }
    if(!regCn.test(f_CardHolder_CardNumber.value)){
      f_CardHolder_CardNumber.style.background = "red";
      f_CardHolder_CardNumber.focus();
      flag = false;
    }
    if(f_Card_expiryMonth.value === "month-0"){
      f_Card_expiryMonth.style.background = "red";
      f_Card_expiryMonth.focus();
      flag = false;
    }
    if(f_Card_expiryYear.value === "year-0"){
      f_Card_expiryYear.style.background = "red";
      f_Card_expiryYear.focus();
      flag = false;
    }
    if(!regCvv.test(f_Card_CVV.value)){
      f_Card_CVV.style.background = "red";
      f_Card_CVV.focus();
      flag = false;
    }
    return flag;
  }
  function validateBilling() {
    var flag = true;
    if(f_CardHolder_address.value === "" || f_CardHolder_address.value === null){
      f_CardHolder_address.style.background = "red";
      f_CardHolder_address.focus();
      flag = false;
    }
    if(f_CardHolder_country.value === "country-0"){
      f_CardHolder_country.style.background = "red";
      f_CardHolder_country.focus();
      flag = false;
    }
    if(f_CardHolder_province.value === "province-0"){
      f_CardHolder_province.style.background = "red";
      f_CardHolder_province.focus();
      flag = false;
    }
    if(f_CardHolder_city.value === "" || f_CardHolder_city.value === null){
      f_CardHolder_city.style.background = "red";
      f_CardHolder_city.focus();
      flag = false;
    }
    if(!regPc.test(f_CardHolder_postalcode.value)){
      f_CardHolder_postalcode.style.background = "red";
      f_CardHolder_postalcode.focus();
      flag = false;
    }
    if(!regPn.test(f_CardHolder_phoneNumber.value)){
      f_CardHolder_phoneNumber.style.background = "red";
      f_CardHolder_phoneNumber.focus();
      flag = false;
    }
    
    return flag;
  }
  
  function showThankYou() {
    thanks_msg.style.display="block";
    thanks_msg.innerHTML= "Thank you " + f_Sender_Name.value + " for your purchase. Your total order is " + f_Quantity.value + " X $" + f_Amount.value + " = $" + (f_Quantity.value * f_Amount.value)+" . A confirmation email will be send to " + f_sender_Email.value + " shortly.";
    f_next_btn.style.display="none";
  
    return false;
  }
    
  };//END OF ONLOAD