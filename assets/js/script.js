var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');

function validateName(){
    var name= document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

function validateEmail(){
    var email= document.getElementById('email').value;
    if(email.length==0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*[@][a-zA-Z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Write valid email';
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;
}