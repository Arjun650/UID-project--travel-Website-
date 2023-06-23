

function validate() {
    const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const number = document.getElementById('number').value;
const txtarea = document.getElementById('txtarea').value;

    document.getElementById("fnameError").textContent = '';
    document.getElementById("lnameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("numberError").textContent = '';
    document.getElementById("txtareaError").textContent = '';

    if (fname.trim() === '') {
        document.getElementById("fnameError").textContent = 'First Name is Required';
        return
    }
    



    if (lname.trim() === '') {
        document.getElementById("lnameError").textContent = 'Last Name is Required'
        return;
    }



    if (email.trim() === '') {
        document.getElementById("emailError").textContent = 'Email Id is Required';
        return;
    }



    if (number.trim() === '') {
        document.getElementById("numberError").textContent = 'Mobile Number is Required';
        return;
    }


    if (txtarea.trim() === '') {
        document.getElementById("txtareaError").textContent = 'Message is Required';
        return;
    }
}

function novalidate(){
    document.getElementById("fnameError").textContent = '';
    document.getElementById("lnameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("numberError").textContent = '';
    document.getElementById("txtareaError").textContent = '';
}