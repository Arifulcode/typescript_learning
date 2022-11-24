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
// abstract  class must be use abstract keyword.
// must be use one abstract method in abstract class.
// must be use abstract method in extends retailer class 
// abstract method don't use body part 
// abstract method can not call class object call
var consumer = /** @class */ (function () {
    function consumer(name, age) {
        this.name = name;
        this.age = age;
    }
    return consumer;
}());
var retailer = /** @class */ (function (_super) {
    __extends(retailer, _super);
    // must be use constructor function
    function retailer(name, age, customerId, email) {
        var _this = _super.call(this, name, age) || this;
        _this.customerId = customerId;
        _this.email = email;
        return _this;
    }
    retailer.prototype.display = function () {
        console.log("client_name: ".concat(this.name, ", client_age: ").concat(this.age, ", customer_id: ").concat(this.customerId, ", client_Email: ").concat(this.email, ","));
    };
    return retailer;
}(consumer));
var retailer1 = new retailer("Ahammed Ali", 59, 100001, "customer@gmail.com");
retailer1.display();
// can not make object in main class
// let client7 = new consumer("Lilufa Yesmin", 42);
// client7.display();
