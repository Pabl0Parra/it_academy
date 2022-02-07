function mySumFunction() {
  let y = parseFloat(document.getElementById("txt1").value); // parseFloat used to allow decimal numbers.
  let z = parseInt(document.getElementById("txt2").value);
  let x = "The result of the sum is " + (y + z) + ".";
  const elementResult = (document.getElementById("add").innerHTML = x);
}

function mySubstractionFunction() {
  let y = document.getElementById("txt3").value;
  let z = document.getElementById("txt4").value;
  let x = "The result of the substraction is " + (y - z) + ".";
  const elementSubstract = (document.getElementById("substract").innerHTML = x);
}

function myMultiplicationFunction() {
  let y = document.getElementById("txt5").value;
  let z = document.getElementById("txt6").value;
  let x = "The result of the multiplication is " + y * z + ".";
  const elementMultiply = (document.getElementById("multiply").innerHTML = x);
}

function myDivisionFunction() {
  let y = document.getElementById("txt7").value;
  let z = document.getElementById("txt8").value;
  let x = "The result of the division is " + y / z + ".";
  const elementDivide = (document.getElementById("divide").innerHTML = x);
}
