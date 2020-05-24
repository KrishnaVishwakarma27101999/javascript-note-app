console.log("welcome")
showNotes();


//user add a note add to localStorage
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", (e) => {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notes)
    showNotes();
})

//functn to show elemnets from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-4 mx-4 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Todo ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Todo</button>
                </div>
            </div>`;
    })

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h3>Click on Add To make Todo</h3>`
    }
}

// function to Delete note
function deleteNote(index) {
    // console.log("im am delete", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {

    let inputVal = searchTxt.value.toLowerCase();
    // console.log("input fired", inputVal)

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";

        }
    })
})

/* add title
    mark note as important
    seperate notes by user
*/