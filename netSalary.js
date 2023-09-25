
function PAYE(taxableIcome){
    //this is a function that calculates the paye according to the
    //latest tax rates
    let tax;
    if (taxableIcome<= 24000){
        // 2400 is a personal relief 
        tax=0.1*(taxableIcome-2400);
    }else if (taxableIcome>24000 &&taxableIcome<=32333){
        tax=0.25*(taxableIcome-2400);
    } else if(taxableIcome>32333 && taxableIcome<=500000){
        tax=0.3*(taxableIcome-2400)
    }else if (taxableIcome>500000 && taxableIcome<=800000){
        tax=0.352*(taxableIcome-2400);
    }else{
        tax=0.35*(taxableIcome-2400);
    }
    return tax;
}

function Nssf(basicsalary){
    /*this function calculates nssf deductions which is 6% of basic salary*/
    let NSSFdeduction;
    NSSFdeduction=0.06*basicsalary;
    return NSSFdeduction;
}
function Nhif(groossSalary){
    //this function calculates the Nhif rates using the gross salary
    // an array will be used to store my objects
    const rates=[
        { min:0, max:5999, deduction:150 },
        { min:6000, max:7999, deduction:300 },
        { min:8000, max:11999, deduction:400 },
        { min:12000, max:14999, deduction:500 },
        { min:15000, max:19999, deduction:600 },
        { min:20000, max:24999, deduction:750 },
        { min:25000, max:29999, deduction:850 },
        { min:30000, max:34999, deduction:950 },
        { min:35000, max:39999, deduction:1000 },
        { min:40000, max:44999, deduction:1150 },
        { min:45000, max:49999, deduction:1200 },
        { min:50000, max:59999, deduction:1300 },
        { min:60000, max:100000000000000, deduction:1500},
    ]
    // the .find()will give me the first object that meets the requirement
    // then i will be able to access the object content especially the deduction
    const nhifRates= rates.find((rate)=>groossSalary>=rate.min && groossSalary<=rate.max);
    //console.log(nhifRates.deduction)
    return  nhifRates? nhifRates.deduction:0;
    // the return checks if nhifrates has returned an object 
    //if found it accesses the object and gets the deduction value
    //else it return 0;
}
//console.log(Nhif(33000))

//this is a function that calculates the housing levy
function housingLevy(groossSalary){
    return 0.015*groossSalary;
}

function Netsalary(basicSalary,benefits){
    // this function calculates the net salry with parameters
    //of basic salry and benefits
    let groossSalary=basicSalary+benefits;
      let taxableIcome=basicSalary-Nssf(basicSalary);
    let paye=PAYE(taxableIcome);
    let nssfDeductions=Nssf(basicSalary);
    let nhifDeductions=Nhif(groossSalary);
    let Hlevy=housingLevy(groossSalary);
    let netPay=groossSalary-paye-nssfDeductions-nhifDeductions-Hlevy;

    return(
       { groossSalary:`your gross-salary = ${groossSalary}`,
        paye: `your PAYE is =${paye}`,
       nhifDeductions:`your Nhif deduction=${nhifDeductions}` ,
      netPay:  `your net income is =${netPay}`})
}

// lets check an example and see if our method works 
const basicSalary=30000;
const benefits=3000;
const details=Netsalary(basicSalary,benefits);
console.log(details["nhifDeductions"])
console.log(details.netPay)
console.log(details.paye)
console.log(details.groossSalary)

const input1=document.getElementById('input-basic')
const input2=document.getElementById('input-benefits')
const button=document.getElementById('check')
const result=document.getElementById('result')
const result2=document.getElementById('result2')
const result3=document.getElementById('result3')
button.addEventListener('click',function(){
    const Bsalary=parseInt(input1.value);
    const Benefits=parseInt(input2.value) ;

let message=Netsalary(Bsalary,Benefits);
result.textContent=message.netPay;
result2.textContent=message.paye;
result3.textContent=message.groossSalary;
})