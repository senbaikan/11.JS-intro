// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
// let myCourse = "Web Dev Bootcamp";
// //    - A variable that stores the price of that course
// let courseFee = 30;
// //    - A variable that stores the three main goals that you have, when taking this course
// let mainGoals = ["HTML", "CSS", "JavaScript"];

// 2) Output ("alert") the three variable values
// alert(myCourse);
// alert(courseFee);
// alert(mainGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter
let group = {
  title: (myCourse = "Web Dev Bootcamp"),
  fee: (courseFee = 30),
  goals: (mainGoals = ["HTML", "CSS", "JavaScript"]),
};

// alert(group.title);
// alert(group.fee);
// alert(group.goals);

// 4) Also output the second element in your "main goals" variable
// alert(mainGoals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function selectElement(array, arrayIndex) {
  let selectedElement = array[arrayIndex];
  return selectedElement;
}
// 6) Execute your custom command from (5) and output ("alert") the result
let firstMainGoal = selectElement(group.goals, 0);
alert(firstMainGoal);

firstMainGoal = selectElement(mainGoals,1);
alert(firstMainGoal);
