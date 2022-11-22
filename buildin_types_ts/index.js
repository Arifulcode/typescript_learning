// Build in dat type:any,number , boolean, string, void , null, undefined
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 1;
firstName = "Ariful";
lastName = " Islam";
isActivated = true;
fullName = firstName.concat(lastName);
function display() {
    console.log("I am form display Method");
}
function display2() {
    console.log("I am form display2 Method");
}
display();
display2();
console.log("Full Name: ".concat(fullName, ", Your id: ").concat(userId, ", Your Account: ").concat(isActivated));
console.log(fullName.split(""));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toLocaleUpperCase());
//console.log(userId.toLocaleUpperCase()); // you see error underlined
