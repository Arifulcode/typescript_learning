console.log("hello i am form ts world!"); 
const userForm = document.querySelector(".user_form") as HTMLFormElement;
// console.log(userForm);
const userName = document.querySelector("#name") as HTMLInputElement;
// console.log(userName);
const userEmail = document.querySelector("#email") as HTMLInputElement;
// console.log(username);
const userCountry = document.querySelector("#country") as HTMLSelectElement;
// console.log(username);
const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;
// console.log(username);
userForm.addEventListener("submit", (event:Event) => {
    event.preventDefault();
    const data={
        username:userName.value,
        useremail:userEmail.value,
        usercountry:userCountry.value,
        userfeedback:userFeedback.value,
    };
    console.log(data);
});