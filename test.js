function makeForm(){
    let form = document.createElement("form");
    let title = document.createElement("textarea");
    title.className = "prompt";
    title.name = "title";
    title.cols = "20";
    title.rows = "1";
    title.placeholder = "Enter title here...";
    form.appendChild(title);
    form.appendChild(document.createElement('br'));
    
    let text = document.createElement("textarea");
    text.className = "prompt";
    text.name = "notebody";
    text.cols = "20";
    text.rows = "4";
    text.placeholder = "Enter note here...";
    form.appendChild(text);
    form.appendChild(document.createElement('br'));

    submit_button = document.createElement("input")
    submit_button.className = "submitButton";
    submit_button.type = "submit";
    submit_button.name = "submit";
    submit_button.value = "Submit";
    form.appendChild(submit_button);
    form.appendChild(document.createElement('br'));

    document.getElementById("form").appendChild(form);

    form.onsubmit = function(event) {
        event.preventDefault();
    
        const noteTitle = event.target.title.value;
        const noteText = event.target.notebody.value;
    
        let custom = prompt("Customize? (y/n)");
        if (custom == "y" || custom == "Y") {
            let x_dim = prompt("Width of note?");
            let newNote = new Note(noteTitle, noteText, x_dim);
            displayNote(newNote);
        } else {
            let newNote = new Note(noteTitle, noteText);
            displayNote(newNote);
        }
    
        form.reset(); // Reset the form input values
        form.style.display = "none"; // Hide the form
    };
    
}

function displayNote(newNote){
    const board = document.getElementById("bulletin");
    const note = document.createElement("div");
    note.className = "note";
    //board.appendChild(note);

    title = document.createElement("h3");
    title.className = "title";
    title.innerHTML = newNote.title;
    title.style.width= newNote.x_dim + "px";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    note.appendChild(title);   

    text = document.createElement("p");
    text.className = "text";
    text.innerHTML = newNote.text;
    text.style.backgroundColor="cornflowerblue";
    text.style.color="white";
    text.style.width = newNote.x_dim + "px";

    note.appendChild(text);
    note.appendChild(span);
    board.appendChild(note);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          console.log("clicked");
          var div = this.parentElement;
          div.style.display = "none";
        }
      } 

}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
