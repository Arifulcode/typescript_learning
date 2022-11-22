

let users:User[];
users =[];
type User = {userName:string; userId:number};


let user1 : User;
user1 = {userName:"Ariful", userId:101};
users.push(user1);

let user2 : User;
user2 = {userName:"Islam", userId:102};
users.push(user2);

let user3 : User;
user3 = {userName:"polash", userId:103};
users.push(user3);

// console.log(user1);
// console.log(user2);
// console.log(user3);
console.log(users);