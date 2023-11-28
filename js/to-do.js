"use strict";

(() => {
    const form = document.querySelector("#to-do-form");
    const addBtn = document.querySelector("#to-do-form button");

    form.addEventListener("submit", e =>{
        e.preventDefault();
        const input = document.querySelector("#to-do");
        const toDoList = document.querySelector("#to-do-list");
        const userInput = input.value;
        input.value = "";

        //creating elements
        const li = document.createElement("li");
        const p = document.createElement("p");
        const doneBtn = document.createElement("button");

        //adding appropriate classes
        p.classList.add("m-0");
        doneBtn.classList.add("btn", "btn-danger");
        li.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");

        //Display content
        doneBtn.innerText = "Done";
        p.innerText = userInput;

        //put into document by appending child
        toDoList.appendChild(li);
        li.appendChild(p);
        li.appendChild(doneBtn);

        //
        doneBtn.addEventListener("click", e => {
            e.target.parentElement.remove();
        })

    })

})();