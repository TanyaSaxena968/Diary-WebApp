const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');

});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup'); 
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup'); 
});

const notesContainer=document.querySelector('.notes-container');
const createBtn=document.querySelector('.create');
let notes=document.querySelectorAll('.input-box');
createBtn.addEventListener("click",function(){
    const inputBox = document.createElement("p");
    inputBox.contentEditable = true;
    inputBox.className="input-box";

    // Append the input element to the notes container
    notesContainer.appendChild(inputBox);
});
