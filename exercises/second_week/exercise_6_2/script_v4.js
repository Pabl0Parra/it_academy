//Prompt the user how many people they would like to enter
let N = prompt("Enter how many people are in your group to find average age");

//Create an empty array to push elements to it
let ages = new Array();

//Complete this loop the same amount of times as the user entered in the prompt
for (let i = 0; i < N; i++) {
  //Push users response to the original array
  ages.push(parseInt(prompt("Enter your ages: ")));
}

//Use the reduce function to get the sum of the array, and then divide it by the amount of elements in the array.
document.write(
  "Avg. of entered ages = " + ages.reduce((a, b) => a + b) / ages.length
);
