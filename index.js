let firstName = 'Narasimha';
let lastName ,username = 'Anguluri';

console.log(`Hi ,${firstName} ${lastName} , how are you`);

let isExists = true;
let nullValue = null;
let department;
console.log(department);

console.log("hi, "+firstName +lastName +"How are you");  //concatenation

console.log(`username:${username}`);


//JSON object Notations

let user = {
    name :'Narasimha',
    email : 'narasimha@gmail.com',
    phoNo : 4589657,
    address:{
        city : 'Vijawada',
        pincode:521137
    }
};

console.log('userdetails:' ,user);
console.log('userName:',user.name);
console.log('ZipCode:' +user.address.pincode);

//functions 

function calculatedUpdatedSalary(salary , incrementPercentage){
    return salary + (salary * incrementPercentage) /100;
}

let updatedSalary = calculatedUpdatedSalary(100000 , 10);
console.log('UpdatedSalary =' ,updatedSalary);


//arrow Functions
let greet = (msg) => {
    return `Hello, ${msg}`;
}

console.log(greet('Narasimha'));

//Constructor

class Customer{
    constructor(id,name,email,concatNo){

        this.id = id;
        this.name=name;
        this.email = email;
        this.concatNo = concatNo;
    }
    //methods

    displayDetails(){
        console.log("Customer Id:",this.id);
        console.log("Name:",this.name);
        console.log("email:",this.email);
        console.log("PhoNo:",this.concatNo);
    }
}
    let customer1 = new Customer('1221','narsimha', 'nara@gmail.com',256878);
    customer1.displayDetails();

//Arrays
let numbers = [1,2,3,4,5,6]

console.log(`numbers : ${numbers}`);
//push(number) - for adding
numbers.push(7);
console.log(`pushNewNumber :${numbers}`);
//pop() - for remove the last element
numbers.pop()
console.log(`popLastNumber : ${numbers}`);

//sclie
let slicenumbers = numbers.slice(1,3);
console.log(`slice the Array:${slicenumbers}`);
console.log(`numbers : ${numbers}`);

//splice
let spliceNumber = numbers.splice(1,3);
console.log(`spliceNumber :,${spliceNumber}`);
console.log(`numbers : ${numbers}`);





