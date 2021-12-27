// Problem Statement 3

function Human(name,age){

   this.name= name;
   
       this.age = age;
   
   };
   
   function Man(name) {
   
   };
   
   function check(){
   
       var obj = new Man("Tommy Tan");
   
       console.log(obj.name) 
   
       console.log(obj instanceof Human) 
   
   }
   
   check()

// Problem statement 2 Study the code on line 2 in the testing widget carefully. const exampleObject = {collection: [{name: "Kelly",}, {name: "Anna",}],} Your task is to use destructuring to extract and display the name of the second object in the array.


const exampleObject = {collection: [{name: "Kelly",}, {name: "Anna",}],}
const { collection: [, { name: secondObject }] } = exampleObject

console.log(secondObject)


// Problem statement 1
// Given an unsorted array of numbers and another number, you are required to find the index at which the number would be placed if it were to be inserted in a sorted version of the array of numbers.

function getIndexToIns(arr, num) {
       let newArray = arr.concat(num)
       newArray.sort((a, b) => a - b)
       return newArray.indexOf(num);
    
  }
  
  console.log(getIndexToIns([5,4,1,3], 2));