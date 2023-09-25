

function gradeGen(Inputmarks){
    /*inputmarks are tghe students marks
    checks if it is a number and between the range of 0-100
    then grades the marks using the provided grade range*/
    
   const  marks=parseInt(Inputmarks);
    if (isNaN(marks)|| marks<0 ||marks>100){
       return "please use the required range of numbers (0-100)"
    }
    let grade='';

   if (marks>79 && marks<=100){
    grade='A'
   }
   if (marks>60 && marks<=79){
    grade='B'
   }
   if (marks>49 && marks<=59){
    grade='C'
   
   }
   if (marks>=40 && marks<=49){
    grade='D'
   }
   if (marks<40 && marks>=0){
    grade='E'
   }
  
  
return `your grade is: ${grade}` ;
}

const userInput=document.getElementById("input");
const checkResult=document.getElementById("check");
const Result=document.getElementById("result");
checkResult.addEventListener('click',()=>{
    let input= userInput.value ;
    let message=gradeGen(input);
    Result.textContent=message;


})
console.log(gradeGen())
