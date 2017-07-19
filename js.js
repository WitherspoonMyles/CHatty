var body = document.querySelector("body");

var textbox = document.querySelector("div#textbox")

var button = document.querySelector("button"); 

var input = document.querySelector("input");



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addMessage(message, className) {
   textbox.insertAdjacentHTML("beforeend", `<p class="${className}"> ${message} </p>`);
}

function mascotReply() {
    addMessage(`Ello, i'm ${mascot.name}.`, "mascotMessage");
}

// Greeting
addMessage("Umm...Who are you?" , "welcomeMessage");


button.addEventListener('click' , function() {
    addMessage(input.value, "userMessage");
    
    setTimeout(mascotReply, 1500);
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

var mascot = {
    name: "2D",
    age: 39
}
