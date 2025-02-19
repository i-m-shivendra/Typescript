//A person's information - in the from of objects
const person: {
    name:string;
    age:number;
    isEmployee: boolean;
    address:{city:string;
             country:string
    }
} = {
    name:"Shivendra",
    age:23,
    isEmployee:true,
    address: {
        city:"Bhopal",
        country:"India"
    }
}

//For accessing the object information
console.log(person.name);
console.log(person.age);
console.log(person.isEmployee);
console.log(person.address.city);
console.log(person.address.country);

// objct example - 2 
const person2={
    firstName:"Shivendra",
    middleName:"Pratap",
    lastName:"Singh",
};
console.log(`Hello, ${person2.firstName} ${person2.middleName}
     ${person2.lastName}`!);



