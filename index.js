// Assignment 6 : objects

// Question no.1 :  Create a Function in Objects



function SetterMethod(obj){
    obj.setter = function(){
        console.log(this.name)
    };
   
}

const myObject = { name:"Amrendra"};
SetterMethod(myObject);
myObject.setter(); // Output : Amrendra


// Question no.2 :  Delete a Parameter

function deletedRollNo(obj) {
    const isDeleted = delete obj.rollNo;
    console.log(isDeleted ?"True" : "False");

    return obj;
}

const student = { name: "Amrendra", rollNo: 1, age: 20 };
deletedRollNo(student); // Output : True  // { name: 'Amrendra', age: 20 } // rollNo is deleted (const isDeleted = delete obj.rollNo;)
// student.rollNo; // Output : undefined // This will throw an error because rollNo is deleted.
// 

// console.log(deletedRollNo(student)); // Output : { name: 'Amrendra', age
// 20 }
// console.log(student); // Output : { name: 'Amrendra', age: 20
// rollNo: 1 }


// Question no.3 :  Check whether the Package is Dream Package or not

function checkPackage(obj) {
    if (obj.package === "Dream Package") {
        console.log("Dream Package")
    }
    else
    console.log("Not a Dream Package") ; 
}
const package1 = { package: "Dream Package" };
checkPackage(package1); // Output : Dream Package
const package2 = { package: "Basic Package" };
checkPackage(package2); // Output : Not a Dream Package

function checkSalary(obj){
    if(obj.salary>50000){
        return "Dream Salary";
    } else {
        return "Not a Dream Salary";
    }
}

const person1 = { name: "Amrendra", salary: 60000 };
console.log(checkSalary(person1)); // Output : Dream Salary
const person2 = { name: "Amrendra", salary: 40000 };
console.log(checkSalary(person2)); // Output : Not a Dream Salary


// Question no.4 :   Check whether the Object has a parameter or not
function checkParameter(obj, parameter) {
    if (parameter in obj) {
        console.log(parameter + " is present in the object");
    } else {
        console.log(parameter + " is not present in the object");
    } 
}
 const person = { name: "Amrendra", age: 20, rollNo:1, city: "Ghzipur", country: "India" };
 checkParameter(person, "name"); // Output : name is present in the object
 checkParameter(person, "age"); // Output : age is present in the object
 checkParameter(person, "rollNo"); // Output : rollNo is present in the object
 checkParameter(person, "city"); // Output : city is not present in the object
 checkParameter(person, "country"); // Output : country is not present in the object


 function ObjectNotEmpty(obj){
    if(Object.keys(obj).length === 0){
        return false;
    } else {
        return true;
    }
 } 

 const emptyObject ={};
 console.log(ObjectNotEmpty(emptyObject)); // Output : false 
 


 //Question No.5 Merge the Objects

 function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
 }

 const object1 = { name: "Amrendra", age: 20 };
 const object2 = {  city: "Ghzipur" , country: "India", occupation:"Developer" };

 const mergedObject = mergeObjects(object1, object2);
 console.log(mergedObject); // Output : { name: "Amrendra", age: 20, city: "Ghzipur", country: "India", occupation: "Developer
 


 // Question No.6 :    Object Multiplyer


//  function multiplyObject(N, obj) {
//     const updatedId = obj.id * N;
//     const updatedHouseNo = obj.houseno * N;

//     return { updatedId, updatedHouseNo };
// }

// const myObject = { id: 10, houseno: 5 };


// const N = 2;

// const result = multiplyObject(N, myObject);


// console.log(result); // Output: { updatedId: 20, updatedHouseNo: 10 }



 function multiplyObject(N,id, houseno){
    const updatedId = id * houseno* N;
    const updatedHouseNo = houseno * N;

    return  {updatedId ,updatedHouseNo};
 }

 const N =2;
 const id = 10;
 const houseno = 5;
 const result = multiplyObject(N,id,houseno);
 console.log(result); // Output : { updatedId: 100, updatedHouseNo: 10




 



//  function multiplyObject(obj, multiplier){
//     return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value * multiplier]));
//  }
 
//  const object = { a: 1, b: 2, c: 3 };
//  const multipliedObject = multiplyObject(object, 2);
//  console.log(multipliedObject); // Output : { a: 2, b: 4
//  // Question No. : Object Adder
//  function adderObject(obj3, obj4){
//     return Object.fromEntries(Object.entries(obj3).map(([key, value]) => [key, value + obj4[key]]));
//  }

// const object3 = { a: 1, b: 2, c: 3 };
// const object4 = { a: 1, b: 2, c: 3 };
// const addedObject = adderObject(object3, object4);
// console.log(addedObject); // Output : { a: 2, b: 4, c: 6   

// Question No.7 :  Find the sum of Object Members
 

function Sum(Obj){
    const sum = Obj.p1 + Obj.p2 + Obj.p3;
    return sum;
 }
 const myObject2 = { p1: 10, p2: 20, p3: 90}
 const result2 = Sum(myObject2);
 console.log(result2); // Output : 120 


 // Question No.8 :   Check whether the Objects are same or not

 function ObjectsSame(obj1,obj2){
    if(Object.keys(obj1).length!==Object.keys(obj2).length){
        return false;
    }
    for(let key in obj1){
        if(obj1[key]!==obj2[key]){
            return false;
        }
    }
    return true;
 }

 const object3 = {id: 1, name: 'Amrendra', age: 25};
 const object4 = {id: 1, name: 'Amrendra', age:22}

 console.log(ObjectsSame(object3,object4));


 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*************************************xxxxxxxxxxxxxxxxxxxxxxxxxxx
