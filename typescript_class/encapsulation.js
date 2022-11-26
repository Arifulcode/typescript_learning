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
// access modifier :: public, private , protected, readonly,
// readonly: can access but can not modify.(and access class er bahiree but not modify)
// public: can access and  modify (and access class er bahiree and modify)
// private: can access own class.
// protected: inherit class can access this property(but class er bahiree can not access )
// private property k jodi access korte hoi set and get kore terpor access korte hobe
var consumer = /** @class */ (function () {
    function consumer(name, age) {
        this.name = name;
        this.age = age;
    }
    consumer.prototype.display = function () {
        console.log("hi");
    };
    ;
    return consumer;
}());
var retailer = /** @class */ (function (_super) {
    __extends(retailer, _super);
    function retailer(name, age, customerId, email) {
        var _this = _super.call(this, name, age) || this;
        _this.customerId = customerId;
        _this.email = email;
        return _this;
    }
    retailer.prototype.display = function () {
        console.log("client_name: ".concat(this.name, ", client_age: ").concat(this.age, ", customer_id: ").concat(this.customerId, ", client_Email: ").concat(this.email, ","));
    };
    retailer.prototype.setEmail = function (email) {
        this.email = email;
    };
    retailer.prototype.getEmail = function () {
        return this.email;
    };
    return retailer;
}(consumer));
var retailer1 = new retailer("Ahammed Ali", 59, 100001, "customer@gmail.com");
// retailer1.display();
// change the name 
var test = new retailer("Ahammed Ali", 59, 100001, "customer@gmail.com");
test.setEmail("test@gmail.com");
console.log(test.getEmail());
console.log(test.name);
// let client7 = new consumer("Lilufa Yesmin", 42);
// client7.display();
