function areNumbersEvenOrOdd() {
  const USERNUMBERS = document.getElementById("id_user_input").value;
  const USERARRAY = USERNUMBERS.split(" ");

  let evenNumbers = 0;
  let oddNumbers = 0;

  for (i = 0; i < USERARRAY.length; i++) {
    if (USERARRAY[i] % 2 === 0) {
      evenNumbers += Number(USERARRAY[i]);
    }
    if (USERARRAY[i] % 2 === 1) {
      oddNumbers += Number(USERARRAY[i]);
    }
  }

  document.getElementById(
    "id_display_user_array"
  ).innerHTML = `The numbers entered are: ${USERARRAY}`;
  document.getElementById(
    "id_display_evens"
  ).innerHTML = `The sum of all even numbers is: ${evenNumbers}`;
  document.getElementById(
    "id_display_odds"
  ).innerHTML = `The sum of all odd numbers is: ${oddNumbers}`;
}
