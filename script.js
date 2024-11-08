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
