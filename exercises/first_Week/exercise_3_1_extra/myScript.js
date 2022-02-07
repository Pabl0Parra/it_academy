function myDoubleFunction() {
  let x = document.getElementById("txt").value;
  let y = "The double of " + x + " is " + parseFloat(x * 2, 10) + ".";
  const elementDouble = (document.getElementById("double").innerHTML = y);
}

function myTripleFunction() {
  let w = document.getElementById("txt2").value;
  let z = "The triple of " + w + " is " + parseFloat(w * 3, 10) + ".";
  const elementTriple = (document.getElementById("triple").innerHTML = z);
}
