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


function validat(){

 document.querySelector("#noempty").innerHTML="";
}


function validate(){
    var username = document.querySelector("#emaill");
    var password = document.querySelector("#pass");

    if(username.value == "" || password.value == ""){
        // alert("please fill the empty space")
        var emp = document.querySelector("#noempty").innerHTML="! please fill the empty space"
    }
    else{
        // var buttonlogin = document.querySelector("#buttonLogin")
         window.open("index.html" , "_self");
        // loginForm.classList.remove('active');
        
    }
}


// validation for booking system 



function novalidate(){

    document.querySelector("#message").innerHTML="";
   }

   function bookvalidate(){
    var placename = document.querySelector("#placeName");
    var number = document.querySelector("#num")
    var date = document.querySelector("#date2")
    var date1 = document.querySelector("#date1")

    if(placename.value == "" || number.value == "" || date.value=="" || date1.value==""){
        // alert("please fill the empty space")
        
        document.querySelector("#message").innerHTML="! please fill the empty space"
    }
    else{
         window.open("response.html" , "_self")

    }
}


// validation for booking system ends here 

// return to home page 






