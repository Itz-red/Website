


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


// ---------- Pop-up for the Hotels dropdown ----------
var popup = document.getElementById("popup");
var links = document.querySelectorAll(".dropdown-list a");

// When an option is clicked, fill in the pop-up and show it
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popup-title").textContent = this.textContent;
    document.getElementById("popup-text").textContent = this.getAttribute("data-text");
    popup.style.display = "flex";
  });
}

// The X button closes the pop-up
document.getElementById("close-btn").addEventListener("click", function () {
  popup.style.display = "none";
});

// Clicking the dark background closes it too
popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
