let ages = new Array();
let N = prompt("How many people are in your group ? ");
N = parseInt(N);
let i = 0,
  s = 0;
for (i = 0; i <= N - 1; i++) {
  ages[i] = parseInt(prompt("Enter the user age: "));
  s += ages[i];
  document.write("The user age is: " + ages[i] + "<br />");
}
if (ages >= 0 && ages <= 120) {
  let averageAge = s / N;
  document.write("The average age of the group is: " + averageAge + "<br />");
} else {
  alert("👻 ghosts not allowed! 👻");
}
