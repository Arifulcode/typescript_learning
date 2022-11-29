"use strict";
class clientAll {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayOne() {
        console.log(`client_name: ${this.name}, client_age: ${this.age}`);
    }
}
class customerAll extends clientAll {
    // must be use constructor function
    constructor(name, age, customerId, email) {
        super(name, age);
        this.customerId = customerId;
        this.email = email;
    }
    displayAll() {
        console.log(`client_name: ${this.name}, client_age: ${this.age}, customer_id: ${this.customerId}, client_Email: ${this.email},`);
    }
}
let customer2 = new customerAll("Ahammed Ali", 59, 100001, "customer@gmail.com");
customer2.displayAll();
// let client2 = new client("Lilufa Yesmin", 42);
// client2.display();
// let client3 = new client("Ariful Islam", 29);
// client3.display();
// let client4 = new client("Alpona Khatun", 23);
// client4.display();
// let client5 = new client("Imran Hossain", 19);
// client5.display();
