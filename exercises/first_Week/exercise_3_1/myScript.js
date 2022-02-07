let firstName;
let lastName;
let age;

function dataFunction() {
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let age = document.getElementById("age").value;
  let result =
    "The user's name is:  " +
    firstName +
    " " +
    lastName +
    " " +
    "and the user is " +
    age +
    " years old.";
  document.getElementById("showData").innerHTML = result;
  console.log({ result });
}

function myFunction() {
  firstName = prompt("Enter your first name: ");
  lastName = prompt("Enter your last name: ");
  age = prompt("Enter your age: ");
  alert(
    "The user's name is:  " +
      firstName +
      " " +
      lastName +
      " " +
      "and the user is " +
      age +
      " years old."
  );
  console.log({ firstName, lastName, age });
}

// document.getElementById(myFunction).innerHTML = firstName;
