"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userMessage = document.querySelector("#message");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userData = {
        name: userName.value,
        email: userEmail.value,
        country: userCountry.value,
        message: userMessage.value,
    };
    console.log(userData);
});
