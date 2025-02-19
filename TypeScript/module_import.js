"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_demo_1 = require("./module_demo");
var util = new module_demo_1.Utility();
var price = util.CalculateAmount(1350, 4);
var discount = (0, module_demo_1.MaxDiscountAllowed)(2);
console.log("Maximum discount allowed is: ".concat(discount));
console.log("Amount to be paid: ".concat(price));
console.log("ProductName is: ".concat(module_demo_1.productName));
