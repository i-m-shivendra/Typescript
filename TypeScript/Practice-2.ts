// enum Family{Mummy, Papa, Shivani, Choti};

// console.log(Family.Mummy);
// console.log(Family['Mummy']);
// console.log(Family[0]);

function add42(a: number, b: number): number{

    return (a+b);
}

let result51:number = add42(45,45);
console.log(result51);



function getPoductDetails(productName: string): string{
    return "Product identified is::"+ productName;

}

let productName: string=getPoductDetails("Laptop");
console.log(productName);


let subtract51 = (c: number, d: number) : number => {
    return (c-d);
}

let result52 = subtract51(45,45);
console.log(result52);

let product51 = (e: number, f: number): number => {
      return (e*f);
}
console.log(product51(3,6));


let division51 = (g: number, h: number): number => {
       return (g/h);
}
console.log(division51(60,32));


let remainder51 = (i: number, j: number):number => {
       return (i/j);
}
console.log((remainder51(78,23)));


//optional parameter
function add101(k: number, l?:number):number{
    
    if(l === undefined){
        return k;
    }
        return (k+l);
    
    
}

let ans101 = add101(23);
let ans102 = add101(89,43);


console.log(ans101);
console.log(ans102);


// default parameter
function add151(m: number, n: number=76): number{
    return (m+n);
}
let ans151 = add101(24);
let ans152 = add101(54,45);
console.log(ans151);
console.log(ans152);

//Rest Parameters

// Add function using rest parameters
const add201 = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
};

// Example usage
console.log(add201(10, 20)); 
console.log(add201(5, 15, 25, 35)); 
console.log(add201(1)); 
console.log(add201(1,2,3,4,5,6,7,8,9,10));



// Product is a class consisting of a property productId
class Product51{
	productId:number;
	// constructor takes a parameter productId which must be passed while creating an instance of the class
	constructor(productId:number){ 
		this.productId=productId;		
	}
    // getProductId() is a method that displays the productId of the instance created	
	getProductId():string{
          return "product id is "+this.productId;
	}
}

var product51:Product = new Product51(1234);
console.log(product.getProductId());


class Product{
    public productId:number; // Declaring productId property using public keyword
    constructor(productId:number){
    this.productId=productId;
    }
    }
    var product:Product=new Product(1234);
    console. log(product.productId); //  Accessing productld outside class since it is declared using public keyword









