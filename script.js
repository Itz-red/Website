


var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");


menuButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});



var bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();  
  
  var place = document.getElementById("where").value;
  var date = document.getElementById("date").value;

  if (place === "") {
    alert("Please choose a location.");
  } else if (date === "") {
    alert("Please choose a date.");
  } else {
    alert("Searching hotels in " + place + " on " + date);
  }
})




var subscribeForm = document.getElementById("subscribe-form");

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;


  if (email.includes("@") && email.includes(".")) {
    alert("Thank you for subscribing!");
    subscribeForm.reset();   
  } else {
    alert("Please enter a valid email id.");
  }
});
