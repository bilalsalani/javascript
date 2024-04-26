 let futureStudentNames = [];


  let stringArray = ["apple", "banana", "orange", "grape"];
  console.log(stringArray);


let number = [1, 2, 3, 4, 5];
console.log(number) 

 let booleanArray = [true, false, true, false]; 
 console.log(booleanArray);


let mixedArray = ["apple", 2, true, { name: "John", age: 25 }, null];
console.log(mixedArray); 

let jobsavaliable = [ "SSC", "HSC", "BCS",
    "BS", "BCOM", "MS", "M. Phil" , "PhD"];
console.log(jobsavaliable);

let students = ["michale" , "jhon" , " tony"]
let marks = [320 , 130, 480];
for ( let i=0 ; i<students.length ; i++)
{
    let percentage = (marks[i]/500)*100;
    console.log(`${students[i]} scored ${marks[i]} out of 500, which is ${percentage}%`);
}