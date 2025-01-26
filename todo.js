function makeNewTask(){
    newTask = document.getElementById('task').value;
    //alert("New task made: " + newTask);
    //add task
    li = document.createElement("li");
	li.innerHTML = newTask;
    if(newTask == ""){
        alert("Bro write down a task");
    }else{
        document.getElementById("unorderedTodoList").appendChild(li);
    }
    document.getElementById("task").value = "";
    var t = document.createTextNode(newTask);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }      
}


var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}




var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}







