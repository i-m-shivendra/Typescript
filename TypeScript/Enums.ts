//Jab 1 property ki muliple values hoti hain tab hum enum use karte hain
// An enum is a class that represents a group of constants(unchangeable variable)

//Example-1 - Numeric Enums(Default)
enum Directions{
    North,East,West,South
}
console.log(Directions[0]);
console.log(Directions[1]);
console.log(Directions[2]);
console.log(Directions[3]);

//Example-2 - NUmeric Enums(Initialized)
enum Directions2{
    North=5,East,West,South
}
console.log(Directions2.North);
console.log(Directions2.East);
console.log(Directions2.West);
console.log(Directions2.South);

//Example-3 Numeric Enums(Mid Initialized)
enum Directions3{
    North,East,West=500,South
}
console.log(Directions3.North);
console.log(Directions3.East);
console.log(Directions3.West);
console.log(Directions3.South);

//Example-4 Numeric Enums(Fully Intialized)
enum Directions4{
    North=56,East=99,West=34,South=897
}
console.log(Directions4.North);
console.log(Directions4.East);
console.log(Directions4.West);
console.log(Directions4.South);

//Exampl-5 String Enums
enum Cricketers{
    Rohit="Mumbai Indians",
    Dhoni="Chennai Super Kings",
    Virat="Royal Challengers Bengaluru",
}
console.log(Cricketers.Rohit);
console.log(Cricketers.Dhoni);
console.log(Cricketers.Virat);

//Example-6 String Enum with Computed Values
enum Fruit {
    Apple = "Apple - " + "Red",
    Banana = "Banana - " + "Yellow",
    Grape = "Grape - " + "Purple"
}

console.log(Fruit.Apple);  // Outputs: Apple - Red
console.log(Fruit.Banana); // Outputs: Banana - Yellow
console.log(Fruit.Grape);  // Outputs: Grape - Purple

//Example-7 Enum with heterogeneous Values
enum MixedEnum {
    Yes = "YES",
    No = "NO",
    Maybe = 1,
    Never = 0
}
console.log(MixedEnum.Yes);   // Outputs: YES
console.log(MixedEnum.No);    //Outputs: NO
console.log(MixedEnum.Maybe); //Outputs: 1
console.log(MixedEnum.Never); // Outputs: 0

//Exampl-8 Reverse Mapping in Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);       // Outputs: 0
console.log(Direction.Down);     // Outputs: 1
console.log(Direction.Left);     // Outputs: 2
console.log(Direction.Right);    // Outputs: 3
console.log(Direction[0]);       // Outputs: Up
console.log(Direction[1]);      // Outputs: Down
console.log(Direction[2]);     // Outputs: Left
console.log(Direction[3]);    // Outputs: Right
