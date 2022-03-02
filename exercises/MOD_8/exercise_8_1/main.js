import { Computer } from "./computers.js";

let computer1;
let computer2;

function createFirstComputer() {
  computer1 = createComputer();
  console.log(computer1);
  debugger;
}

function createSecondComputer() {
  computer2 = createComputer();
  console.log(computer2);
}

const button1 = document.getElementById("id_button1");
const button2 = document.getElementById("id_button2");

button1.addEventListener("click", () => {
  createFirstComputer();
});
button2.addEventListener("click", () => {
  createSecondComputer();
});

const buttonRam = document.getElementById("id_button_ram");

buttonRam.addEventListener("click", () => {
  const newRam = document.getElementById("id_new_ram").value;
  computer1.set(newRam);
  console.log(newRam);
});

let brand;
let model;
let processor;
let ramAmount;
let hardDriveSize;

function createComputer() {
  brand = prompt("Who's the computer maker?");
  model = prompt("What's the computer model?");
  processor = prompt("What's the processor name?");
  ramAmount = prompt("What's the RAM?");
  hardDriveSize = prompt("What's the hard-drive size?");

  const computer = new Computer(
    brand,
    model,
    processor,
    ramAmount,
    hardDriveSize
  );

  return computer;
}
