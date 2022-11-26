"use strict";
// abstract  class must be use abstract keyword.
// must be use one abstract method in abstract class.
// must be use abstract method in extends retailer class 
// abstract method don't use body part 
// abstract method can not call class object call
class consumer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class retailer extends consumer {
    // must be use constructor function
    constructor(name, age, customerId, email) {
        super(name, age);
        this.customerId = customerId;
        this.email = email;
    }
    display() {
        console.log(`client_name: ${this.name}, client_age: ${this.age}, customer_id: ${this.customerId}, client_Email: ${this.email},`);
    }
}
let retailer1 = new retailer("Ahammed Ali", 59, 100001, "customer@gmail.com");
retailer1.display();
// can not make object in main class
// let client7 = new consumer("Lilufa Yesmin", 42);
// client7.display();
