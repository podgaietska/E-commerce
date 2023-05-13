const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if(hamburger){
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

// Popup

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup){
    closePopup.addEventListener("click", () => {
        popup.classList.add("hide-popup");
    });

    window.addEventListener("load", () => {
        setTimeout(() => {
            popup.classList.remove("hide-popup");
        }, 1000);
    });
}

const registrationButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");


registrationButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});