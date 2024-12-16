import { question } from "readline-sync";
type Operter="+"|"-"|"*"|"/"
function main():void {
    const firststr:string=question('enter the number\n');
    const operater:string=question('enter the operater\n');
    const secondstr:string=question('enter the number\n');

   const vaildInput=isNumber(firststr) && isOperater(operater) && isNumber(secondstr)

   if (vaildInput) {
       const firstnum:number=parseInt(firststr)
       const secondnum:number=parseInt(secondstr)
       const result=calculate(firstnum,operater as Operter,secondnum)
       console.log(result)
   } else {
    console.log("invaild number")
    main()
   }
}

function calculate(firstnum:number,operater:Operter,secondnum:number) {
    switch (operater) {
        case "+":
            return firstnum + secondnum;
        case "-":
            return firstnum - secondnum;
        case "*":
            return firstnum*secondnum;
        case "/":
            return firstnum/secondnum
        default:
            break;
    }
}

// check operater
function isOperater(operater:string):boolean {
    switch (operater) {
        case "+":
        case "-":
        case "*":
        case "/":            
            return true;
    
        default:
           return false;
    }
}
function isNumber(str:string):boolean {
    let maynum=parseInt(str);
    let isnum:boolean=!isNaN(maynum)
    return isnum
}