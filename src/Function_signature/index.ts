// function signature:: akta function er structure kamon hobe seti define kore dei.
// like:: ki return korbe, parameter thakbe ki na . koita parameter thakbe, kisu return korbe ki na , type ki hobe etc
let userInformation1:()=>void;
let userInformation2:(name:string)=>void;
let userInformation3:(name:string, age:number)=>string;

userInformation1 = ()=>{
    console.log("user informaion funciton signature");
}
userInformation2 = (name:string)=>{
    console.log(`user name: ${name} informaion funciton signature`);
}
userInformation3 = (name:string, age:number)=>{
    return `user name: ${name} and age: ${age} informaion funciton signature`;
}

userInformation1();
userInformation2("polash");
userInformation3("userthree", 29);
