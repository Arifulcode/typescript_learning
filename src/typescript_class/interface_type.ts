interface IEmployees{
    id:number;
    name:string;
    age:number;
    country:string;
}

let employees:IEmployees[]=[];

let Employee1:IEmployees={
    id:1,
    name:"ariful islam",
    age:29,
    country:"bangladesh",
}
let Employee2:IEmployees={
    id:2,
    name:"Imran Hossain",
    age:19,
    country:"india",
}
let Employee3:IEmployees={
    id:3,
    name:"Kaniz Robayna",
    age:29,
    country:"pakistan",
}

employees.push(Employee1);
employees.push(Employee2);
employees.push(Employee3);

const printEmployeeInfo = (employee:IEmployees)=>{
    console.log(`emp_id =${employee.id},emp_name =${employee.name},emp_age =${employee.age},`);

}
employees.forEach(employee=>printEmployeeInfo(employee))