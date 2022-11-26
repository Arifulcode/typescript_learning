"use strict";
class client {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`client_name: ${this.name}, client_age: ${this.age}`);
    }
}
let client1 = new client("Ahammed Ali", 59);
client1.display();
let client2 = new client("Lilufa Yesmin", 42);
client2.display();
let client3 = new client("Ariful Islam", 29);
client3.display();
let client4 = new client("Alpona Khatun", 23);
client4.display();
let client5 = new client("Imran Hossain", 19);
client5.display();
