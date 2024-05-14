//for opening a new note
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
//for saving the note
const btnSave=document.querySelector('.btnSubmit');
btnSave.addEventListener("click",()=>{
    const inputBox = document.querySelector('.input-box');
    updateStorage();
    inputBox.remove();
    
});

//storage
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
