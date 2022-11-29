 // access modifier :: public, private , protected, readonly,
 // readonly: can access but can not modify.(and access class er bahiree but not modify)
 // public: can access and  modify (and access class er bahiree and modify)
 // private: can access own class.
 // protected: inherit class can access this property(but class er bahiree can not access )
 // private property k jodi access korte hoi set and get kore terpor access korte hobe
 class consumerTwo{
    public name:string;
    public age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

     display():void{
        console.log("hi");
     } ;
}

class retailerTwo extends consumer{
    customerId:number;
    private email:string;
   
    constructor(name:string, age:number, customerId:number, email:string){
        super(name, age)
        this.customerId = customerId;
        this.email = email;
        
    }
    display():void {
        console.log(`client_name: ${this.name}, client_age: ${this.age}, customer_id: ${this.customerId}, client_Email: ${this.email},`);
    }
    setEmail(email:string):void{
        this.email=email;
    }
    getEmail():string{
        return this.email;
    }
}

let retailerone = new retailerTwo("Ahammed Ali", 59, 100001, "customer@gmail.com");
// retailer1.display();
// change the name 
let test = new retailerTwo("Ahammed Ali", 59, 100001, "customer@gmail.com");
test.setEmail("test@gmail.com");
console.log(test.getEmail());
console.log(test.name);

// let client7 = new consumer("Lilufa Yesmin", 42);
// client7.display();

