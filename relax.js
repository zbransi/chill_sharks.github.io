window.onload = function() {
    setTimeout(function() {
        window.location.href = "focus.html"; 
        alert("Time to work!"); // triggers the callback after 5 mins
    }, 20000);

};