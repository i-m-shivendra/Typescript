"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = exports.productName = void 0;
exports.MaxDiscountAllowed = MaxDiscountAllowed;
function MaxDiscountAllowed(noOfProduct) {
    if (noOfProduct > 5) {
        return 30;
    }
    else {
        return 10;
    }
}
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.CalculateAmount = function (price, quantity) {
        return price * quantity;
    };
    return Utility;
}());
exports.Utility = Utility;
exports.productName = "Mobile";
