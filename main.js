// const name = "The Queen of Hearts";
// let greeting;

// switch (name) {
//   case "Alice":
//     greeting = "Hello, Alice!";
//     break;
//   case "The White Rabbit":
//     greeting = "Don't be late, White Rabbit";
//     break;
//   case "The Mad Hatter":
//     greeting = "Welcome to the tea party, Mad Hatter";
//     break;
//   case "The Queen of Hearts":
//     greeting = "Please don't chop off my head!";
//     break;
//   default:
//     greeting = "Whoooo are you?";
// }

// greeting;

// console.log(greeting);

const age = 17;
let isAdult, canWork, canEnlist, canDrink;

switch (true) {
  case age >= 21:
    canDrink = true;
  case age >= 18:
    isAdult = true;
    canEnlist = true;
  case age >= 16:
    canWork = true;
}
canWork;
//canEnlist;
//isAdult;
//canDrink;

console.log(isAdult);
