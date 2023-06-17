let formBtn = document.querySelector("#login-btn");
let loginForm= document.querySelector(".login-form-container");
let  formClose = document.querySelector('#form-close')
let menu = document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar')


formBtn.addEventListener('click' , ()=>{
    loginForm.classList.add('active');
})
menu.addEventListener('click' , ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})


formClose.addEventListener('click' , ()=>{
    loginForm.classList.remove('active');
}); 