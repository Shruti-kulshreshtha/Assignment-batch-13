let emprecords = [
    {ename:"Parag",id:100,bsal:10000},
    {ename:"Prachi",id:101,bsal:13000},
    {ename:"Manas",id:200,bsal:9000},
    {ename:"Daesha",id:115,bsal:8000},
    {ename:"Anagha",id:104,bsal:20000}
]
// /* Map */
// var enames = emprecords.map(e=>e.ename.toLowerCase())
// console.log(enames);
 
// /* Filter */
// var enames = emprecords.filter(e=>e.bsal>9000 && e.id>100)
// console.log(enames);
 
// /* Reduce */
// let totalsal = emprecords.reduce(((acc,emp)=>acc+emp.bsal),0)
// console.log("All employee salary",totalsal)


//calculate total salary
const totalSalary = emprecords
.filter(emp => emp.salary>9000)
.reduce((total,emp)=>total+emp.salary,0);
 console.log("total salary of employee with salary more than 9000 is :",totalSalary)

 //names of employes with salary more tham 9000
 const namesAbove8000 = emprecords
 .filter(emp=>emp.salary>8000)
 .map(emp=>emp.ename);

console.log("names of employes are: ",namesAbove8000);

//salary after adding bonus
const totalSalaryAfterBonus = emprecords
.filter(emp=>emp.salary>=9000)
.reduce((total,emp)=>total + emp.salary*1.15,0);

console.log("total salary after bonus is :",totalSalaryAfterBonus);
