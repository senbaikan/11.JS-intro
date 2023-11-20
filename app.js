// camelCase as a convention, starting lower case, upper case for sub words, no special characters, no blanks
let age = 42;
// back slash for single closing inside
let userName = "Ma'rk";
// back ticks for multiple line variables
let userPhone = `0401
070
595`;
// combine with +
let userSex = "Ma" + "le";

//arrays,
let hobbies = ["Sports", "Cooking", "Reading"];

//objects - labels and properties in curly braces, : between them
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

/* alert(userName);
alert(userPhone);
alert(userSex);
//first item of the arrays
alert(hobbies[0]);
alert(job.title); */

let totalAdultYears;

function calculateAdultYears(userAge) {
  //variable in the function works in the function only
  let result;
  result = userAge - 18;
  return result;
  // return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears); //purple box is method

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: "Mark", // Property, variable in object
  greet() { // Method, function in object
    console.log("Hello!");
  },
};

person.greet();
console.log(person.name);