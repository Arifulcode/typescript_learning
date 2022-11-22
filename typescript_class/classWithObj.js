var client = /** @class */ (function () {
    function client(name, age) {
        this.name = name;
        this.age = age;
    }
    client.prototype.display = function () {
        console.log("client_name: ".concat(this.name, ", client_age: ").concat(this.age));
    };
    return client;
}());
var client1 = new client("Ahammed Ali", 59);
client1.display();
var client2 = new client("Lilufa Yesmin", 42);
client2.display();
var client3 = new client("Ariful Islam", 29);
client3.display();
var client4 = new client("Alpona Khatun", 23);
client4.display();
var client5 = new client("Imran Hossain", 19);
client5.display();
