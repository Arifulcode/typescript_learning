var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var customer = /** @class */ (function (_super) {
    __extends(customer, _super);
    // must be use constructor function
    function customer(name, age, customerId, email) {
        var _this = _super.call(this, name, age) || this;
        _this.customerId = customerId;
        _this.email = email;
        return _this;
    }
    customer.prototype.display = function () {
        console.log("client_name: ".concat(this.name, ", client_age: ").concat(this.age, ", customer_id: ").concat(this.customerId, ", client_Email: ").concat(this.email, ","));
    };
    return customer;
}(client));
var customer1 = new customer("Ahammed Ali", 59, 100001, "customer@gmail.com");
customer1.display();
// let client2 = new client("Lilufa Yesmin", 42);
// client2.display();
// let client3 = new client("Ariful Islam", 29);
// client3.display();
// let client4 = new client("Alpona Khatun", 23);
// client4.display();
// let client5 = new client("Imran Hossain", 19);
// client5.display();
