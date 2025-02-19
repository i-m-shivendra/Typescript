abstract class Account{
   static getAcc(): void{
    console.log("Bank Account");
   }
   abstract creditAmount(): string;
}

class saving extends Account{
    getAcc(){
        console.log("Saving Account");
        
    }
    creditAmount(): string {
        return "Amount is credited";
    }
}

console.log(new saving().creditAmount());
console.log(saving.getAcc());

