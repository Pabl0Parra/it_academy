//añade y muestra por console el array creado por el user (uno a uno)
function showArrayInput() {
  let arrayInput = new Array();
  let inputValues = document.getElementsByClassName("dataInput");
  ageValues = [].map.call(inputValues, function (dataInput) {
    arrayInput.push(dataInput.value);
  });
  arrayInput.forEach(function (inputValueData) {
    console.log("The users age are: " + inputValueData);
  });
}
