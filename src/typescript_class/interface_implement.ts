interface IDemoFormatter{
    formatDemo:()=>string;
}

class Demo implements IDemoFormatter{
    constructor(private fullName:string, private age:number){}
    formatDemo=()=>{
        return `full_name:${this.fullName} & age:${this.age}`;
    };
}
let demo = new Demo("Ariful Islam", 29);
// console.log(demo);
console.log(demo.formatDemo());