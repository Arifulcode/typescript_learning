"use strict";
// function signature:: akta function er structure kamon hobe seti define kore dei.
// like:: ki return korbe, parameter thakbe ki na . koita parameter thakbe, kisu return korbe ki na , type ki hobe etc
let userInformation1;
let userInformation2;
let userInformation3;
userInformation1 = () => {
    console.log("user informaion funciton signature");
};
userInformation2 = (name) => {
    console.log(`user name: ${name} informaion funciton signature`);
};
userInformation3 = (name, age) => {
    return `user name: ${name} and age: ${age} informaion funciton signature`;
};
userInformation1();
userInformation2("polash");
userInformation3("userthree", 29);
