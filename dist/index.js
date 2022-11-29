"use strict";
console.log("hello i am form ts world!");
const userForm = document.querySelector(".user_form");
// console.log(userForm);
const userName = document.querySelector("#name");
// console.log(userName);
const userEmail = document.querySelector("#email");
// console.log(username);
const userCountry = document.querySelector("#country");
// console.log(username);
const userFeedback = document.querySelector("#feedback");
// console.log(username);
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountry.value,
        userfeedback: userFeedback.value,
    };
    console.log(data);
});
