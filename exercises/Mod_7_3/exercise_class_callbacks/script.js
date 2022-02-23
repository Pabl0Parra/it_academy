//We create a function that will iterate through an array, basically recreating the array.map() method
function myFunction(array, yourFunction) {
  if (!Array.isArray(array)) {
    // case 1 (it verifies that is not an array)
    console.error("first parameter is not an array");
  }
  if (typeof yourFunction != "function") {
    // case 2 (it verifies that is not a function)
    console.error("second parameter is not a function");
  }
  const NEW_ARRAY = [];
  for (element of array) NEW_ARRAY.push(yourFunction(array));

  //case 1: sum 1 to each element of the array
  function sum1(element) {
    return element + 1;
  }

  //case 2

  //   function yourFunction(array) {
  //     const SUM1ARRAY = array.map((x) => x + 1); //case 3
  //     console.log(SUM1ARRAY);
  //     return SUM1ARRAY;

  //     const SUM2ARRAY = array.map((x) => x + 2); //case 4
  //     console.log(SUM2ARRAY);

  //     const SUM3ARRAY = array.map((x) => x + 3); //case 5
  //     console.log(SUM3ARRAY);

  //     const MULTIPLYBY2ARRAY = array.map((x) => x * 2); //case 6
  //     console.log(MULTIPLYBY2ARRAY);

  //     const REST2ARRAY = array.map((x) => x - 2); //case 7
  //     console.log(REST2ARRAY);

  //     const DIVIDE2ARRAY = array.map((x) => x - 2); //case 8
  //     console.log(`Divide array by 2: ${DIVIDE2ARRAY}`);

  //     const CONVERTARRAYTOUPPER = array.map((x) => x.toUpperCase()); //case 9
  //     console.log(CONVERTARRAYTOUPPER);
  //   }
  // }
}
