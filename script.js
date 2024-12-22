// Get modal elements
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get button elements
var loginBtn = document.getElementById("login-btn");
var signupBtn = document.getElementById("signup-btn");

// Get the <span> elements that close the modals
var closeBtns = document.getElementsByClassName("close");

// Show login modal when login button is clicked
loginBtn.onclick = function () {
    loginModal.style.display = "flex";
}

// Show sign up modal when sign up button is clicked
signupBtn.onclick = function () {
    signupModal.style.display = "flex";
}

// Close modal when clicking on the close (x)
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function () {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
    }
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}
// slow

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    };

    // Trigger the fade-in effect when scrolling
    window.addEventListener('scroll', fadeInOnScroll);
    // Also trigger it once on initial load
    fadeInOnScroll();
});

// new added js 
// concept for login and sign-up checking
 // Global variables to store signup data
 let original_email = "";
 let confirm_original_password = "";

 // Signup logic
 function takeUserInput(event) {
   event.preventDefault(); // Prevent form submission

   original_email = document.getElementById('signup-email').value;
   const original_password = document.getElementById('signup-password').value;
   confirm_original_password = document.getElementById('signup-confirm-password').value;

   if (original_password === confirm_original_password) {
     alert("You have sign-uped successfully");
   } else {
     alert("Passwords do not match!");
   }

   return false;
 }

 // Login logic
 let attempt = 3;

 function validate(event) {
   event.preventDefault(); // Prevent form submission

   const email = document.getElementById('login-email').value;
   const password = document.getElementById('login-password').value;

   if (email === original_email && password === confirm_original_password) {
     alert("Login successfully");
   } else {
     attempt--;
     alert("You have " + attempt + " attempts left!");

     if (attempt === 0) {
       document.getElementById('login-email').disabled = true;
       document.getElementById('login-password').disabled = true;
       document.querySelector('.submit-btn').disabled = true;
     }
   }

   return false;
 }