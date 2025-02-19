
//function definition(Default Parameters)
const greet5=(name:string,id:number=1)=>{
    return (`Welcome, ${name} and your id is ${id}`)
}

//function call
const ans5=greet5("Shivendra");
console.log(ans5);



//function definition(Optional Parameters)
const greet6=(name:string,id ? :number)=>{

    if(id){
        return(`Welcome ${name} and your id is ${id}`);
    }
    else{
        return (`Welcome, ${name}`);
    }
}
//function call
const ans6=greet6("Nargis");
console.log(ans6);
