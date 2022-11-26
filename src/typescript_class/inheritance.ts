class client{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    display():void {
        console.log(`client_name: ${this.name}, client_age: ${this.age}`);
    }
}

class customer extends client{
    customerId:number;
    email:string;
    // must be use constructor function
    constructor(name:string, age:number, customerId:number, email:string){
        super(name, age)
        this.customerId = customerId;
        this.email = email;
        
    }
    display():void {
        console.log(`client_name: ${this.name}, client_age: ${this.age}, customer_id: ${this.customerId}, client_Email: ${this.email},`);
    }
}

let customer1 = new customer("Ahammed Ali", 59, 100001, "customer@gmail.com");
customer1.display();
// let client2 = new client("Lilufa Yesmin", 42);
// client2.display();
// let client3 = new client("Ariful Islam", 29);
// client3.display();
// let client4 = new client("Alpona Khatun", 23);
// client4.display();
// let client5 = new client("Imran Hossain", 19);
// client5.display();
