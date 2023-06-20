let formBtn = document.querySelector("#login-btn");
let loginForm= document.querySelector(".login-form-container");
let  formClose = document.querySelector('#form-close')
let menu = document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar')


formBtn.addEventListener('click' , ()=>{
    loginForm.classList.add('active');
})


formClose.addEventListener('click' , ()=>{
    loginForm.classList.remove('active');
}); 

menu.addEventListener('click' , ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})



function validate(){
    var username = document.querySelector("#emaill");
    var password = document.querySelector("#pass");

    if(username.value == "" || password.value == ""){
        alert("please fill the empty space")
        // var emp = document.querySelector("#noempty").innerHTML="please fill the empty space"
    }
    else{
         
    }
}







