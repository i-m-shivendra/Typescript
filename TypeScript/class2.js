// class with methods
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var myRectangle1 = new Rectangle(5, 10);
console.log("Area: ".concat(myRectangle1.area())); // Outputs: Area: 50
console.log("Perimeter: ".concat(myRectangle1.perimeter())); // Outputs: Perimeter: 30
var myRectangle2 = new Rectangle(5.98, 4.2134);
console.log("Area: ".concat(myRectangle2.area())); // Outputs: Area: 25.194132
console.log("Perimeter: ".concat(myRectangle2.perimeter())); // Outputs: Perimeter: 20.3868
// class with inheritance
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, employeeId) {
        var _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.displayEmployeeInfo = function () {
        console.log("Employee ID: ".concat(this.employeeId));
    };
    return Employee;
}(Person));
var employee21 = new Employee("Bob", 35, 101);
employee21.greet(); // Outputs: Hello, my name is Bob and I am 35 years old.
employee21.displayEmployeeInfo(); // Outputs: Employee ID: 101
//class - with access modifiers
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance, accountType) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited: ".concat(amount, ". New Balance: ").concat(this.balance));
    };
    BankAccount.prototype.getBalance = function () {
        console.log("Balance: ".concat(this.balance));
    };
    return BankAccount;
}());
var myAccount = new BankAccount(123456789, 1000, "Savings");
myAccount.deposit(500); // Outputs: Deposited: 500. New Balance: 1500
myAccount.getBalance(); // Outputs: Balance: 1500
//class with static members
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.calculateCircumference = function (radius) {
        return 2 * MathUtils.pi * radius;
    };
    MathUtils.pi = 3.14159;
    return MathUtils;
}());
console.log("Circumference: ".concat(MathUtils.calculateCircumference(10)));
