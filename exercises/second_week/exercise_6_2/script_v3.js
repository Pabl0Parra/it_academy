let ages = new Array();
let N = prompt("How many numbers would you like to enter? ");
N = parseInt(N);
let i = 0,
  s = 0;
for (i = 0; i <= N - 1; i++) {
  ages[i] = parseInt(prompt("Enter your numbers: "));
  s += ages[i];
  document.write("Number you chose: " + ages[i] + "<br />");
}
let average = s / N;
document.write("Average: " + average + "<br />");
