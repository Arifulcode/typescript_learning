"use strict";
let employees = [];
let Employee1 = {
    id: 1,
    name: "ariful islam",
    age: 29,
    country: "bangladesh",
};
let Employee2 = {
    id: 2,
    name: "Imran Hossain",
    age: 19,
    country: "india",
};
let Employee3 = {
    id: 3,
    name: "Kaniz Robayna",
    age: 29,
    country: "pakistan",
};
employees.push(Employee1);
employees.push(Employee2);
employees.push(Employee3);
const printEmployeeInfo = (employee) => {
    console.log(`emp_id =${employee.id},emp_name =${employee.name},emp_age =${employee.age},`);
};
employees.forEach(employee => printEmployeeInfo(employee));
