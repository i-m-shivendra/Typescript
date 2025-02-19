//Jab 1 property ki muliple values hoti hain tab hum enum use karte hain
// An enum is a class that represents a group of constants(unchangeable variable)
//Example-1 - Numeric Enums(Default)
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["East"] = 1] = "East";
    Directions[Directions["West"] = 2] = "West";
    Directions[Directions["South"] = 3] = "South";
})(Directions || (Directions = {}));
console.log(Directions[0]);
console.log(Directions[1]);
console.log(Directions[2]);
console.log(Directions[3]);
//Example-2 - NUmeric Enums(Initialized)
var Directions2;
(function (Directions2) {
    Directions2[Directions2["North"] = 5] = "North";
    Directions2[Directions2["East"] = 6] = "East";
    Directions2[Directions2["West"] = 7] = "West";
    Directions2[Directions2["South"] = 8] = "South";
})(Directions2 || (Directions2 = {}));
console.log(Directions2.North);
console.log(Directions2.East);
console.log(Directions2.West);
console.log(Directions2.South);
//Example-3 Numeric Enums(Mid Initialized)
var Directions3;
(function (Directions3) {
    Directions3[Directions3["North"] = 0] = "North";
    Directions3[Directions3["East"] = 1] = "East";
    Directions3[Directions3["West"] = 500] = "West";
    Directions3[Directions3["South"] = 501] = "South";
})(Directions3 || (Directions3 = {}));
console.log(Directions3.North);
console.log(Directions3.East);
console.log(Directions3.West);
console.log(Directions3.South);
//Example-4 Numeric Enums(Fully Intialized)
var Directions4;
(function (Directions4) {
    Directions4[Directions4["North"] = 56] = "North";
    Directions4[Directions4["East"] = 99] = "East";
    Directions4[Directions4["West"] = 34] = "West";
    Directions4[Directions4["South"] = 897] = "South";
})(Directions4 || (Directions4 = {}));
console.log(Directions4.North);
console.log(Directions4.East);
console.log(Directions4.West);
console.log(Directions4.South);
//Exampl-5 String Enums
var Cricketers;
(function (Cricketers) {
    Cricketers["Rohit"] = "Mumbai Indians";
    Cricketers["Dhoni"] = "Chennai Super Kings";
    Cricketers["Virat"] = "Royal Challengers Bengaluru";
})(Cricketers || (Cricketers = {}));
console.log(Cricketers.Rohit);
console.log(Cricketers.Dhoni);
console.log(Cricketers.Virat);
//Example-6 String Enum with Computed Values
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "Apple - Red";
    Fruit["Banana"] = "Banana - Yellow";
    Fruit["Grape"] = "Grape - Purple";
})(Fruit || (Fruit = {}));
console.log(Fruit.Apple); // Outputs: Apple - Red
console.log(Fruit.Banana); // Outputs: Banana - Yellow
console.log(Fruit.Grape); // Outputs: Grape - Purple
//Example-7 Enum with heterogeneous Values
var MixedEnum;
(function (MixedEnum) {
    MixedEnum["Yes"] = "YES";
    MixedEnum["No"] = "NO";
    MixedEnum[MixedEnum["Maybe"] = 1] = "Maybe";
    MixedEnum[MixedEnum["Never"] = 0] = "Never";
})(MixedEnum || (MixedEnum = {}));
console.log(MixedEnum.Yes); // Outputs: YES
console.log(MixedEnum.No); //Outputs: NO
console.log(MixedEnum.Maybe); //Outputs: 1
console.log(MixedEnum.Never); // Outputs: 0
//Exampl-8 Reverse Mapping in Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // Outputs: 0
console.log(Direction.Down); // Outputs: 1
console.log(Direction.Left); // Outputs: 2
console.log(Direction.Right); // Outputs: 3
console.log(Direction[0]); // Outputs: Up
console.log(Direction[1]); // Outputs: Down
console.log(Direction[2]); // Outputs: Left
console.log(Direction[3]); // Outputs: Right
