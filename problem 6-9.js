let arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) 
{
    let tranformEmployeeList = [];
    for(let j=0;j<arr.length;j++)
    {
        let object = {};
        for(let i=0;i<arr[j].length;i++)
        {
            let key = arr[j][i][0];
            let value = arr[j][i][1];
            object[key] = value;
            
        }
        tranformEmployeeList.push(object);
        
    }
    return tranformEmployeeList;
    
}
console.log("Task 6 :",transformEmployeeData(arr));
let expected = {foo: 5, bar: 6};
let actual = {foo: 5, bar: 6};
let a=JSON.stringify(expected);
let b=JSON.stringify(actual);
if(a===b)
{
    console.log("Task 7 : Equal");
}
else
{
    console.log("Task 7 : Unequal");
}
let securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
];
 function demo(question,answer) {
     for(let x in securityQuestions)
     {
         if( securityQuestions[x].question===question && securityQuestions[x].expectedAnswer===answer)
         {
             return true;
         }
         else
         {
             return false;
         }
     }
    }
    console.log( "Task 8 :",demo("What city were you born in?","NYC"));
let students = [
 {
 name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];

 function minor(arr)
 {
     let output=[];
     for(let x in students)
     {
         if(students[x].age<20)
         {
             output.push(students[x]);
         }
     }
     return output;
 }
 let result=minor(arr);
 console.log("Task 9 :",result);