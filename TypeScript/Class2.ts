// class with methods

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const myRectangle1 = new Rectangle(5, 10);
console.log(`Area: ${myRectangle1.area()}`); // Outputs: Area: 50
console.log(`Perimeter: ${myRectangle1.perimeter()}`); // Outputs: Perimeter: 30

const myRectangle2 = new Rectangle(5.98, 4.2134);
console.log(`Area: ${myRectangle2.area()}`); // Outputs: Area: 25.194132
console.log(`Perimeter: ${myRectangle2.perimeter()}`); // Outputs: Perimeter: 20.3868

// class with inheritance
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    displayEmployeeInfo() {
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

const employee21 = new Employee("Bob", 35, 101);
employee21.greet(); // Outputs: Hello, my name is Bob and I am 35 years old.
employee21.displayEmployeeInfo(); // Outputs: Employee ID: 101


//class - with access modifiers
class BankAccount {
    public accountNumber: number;
    private balance: number;
    protected accountType: string;

    constructor(accountNumber: number, balance: number, accountType: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }

    public deposit(amount: number) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    }

    public getBalance() {
        console.log(`Balance: ${this.balance}`);
    }
}

const myAccount = new BankAccount(123456789, 1000, "Savings");
myAccount.deposit(500); // Outputs: Deposited: 500. New Balance: 1500
myAccount.getBalance(); // Outputs: Balance: 1500


//class with static members
class MathUtils {
    static pi: number = 3.14159;

    static calculateCircumference(radius: number): number {
        return 2 * MathUtils.pi * radius;
    }
}

console.log(`Circumference: ${MathUtils.calculateCircumference(10)}`); 