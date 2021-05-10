



let booklist = document.querySelector('.bookList');
let unOrderedList = document.querySelector('.list');


unOrderedList.addEventListener("click", (e) => {
    if (e.target.className === "delete") {

        let targetList = e.target.parentElement.parentElement;
        unOrderedList.removeChild(targetList);
    }

});




let form = document.forms["create"];

form.addEventListener("submit", (e) => {

    e.preventDefault();
    const formValue = form.querySelector('input[type="text"]').value;

    
    let newList = document.createElement('li');
    let newItem=document.createElement('items')
    let newSpan=document.createElement('span');
    let newbutton = document.createElement('button');


    newItem.appendChild(newSpan);
    newItem.appendChild(newbutton);

    // to <li></li>........
    newList.appendChild(newItem);

    newSpan.textContent=formValue;
    newbutton.textContent = "delete";

   
    
   
    
     // adding classes................
     newbutton.classList="delete";
     newSpan.classList="assignment";
     newItem.classList="items"


    unOrderedList.append(newList);


})