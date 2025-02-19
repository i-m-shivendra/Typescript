var HelloWorld = /** @class */ (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Hello Typescript');
console.log(hello.message);
