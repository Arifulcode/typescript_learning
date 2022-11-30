"use strict";
class Demo {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
        this.formatDemo = () => {
            return `full_name:${this.fullName} & age:${this.age}`;
        };
    }
}
let demo = new Demo("Ariful Islam", 29);
// console.log(demo);
console.log(demo.formatDemo());
