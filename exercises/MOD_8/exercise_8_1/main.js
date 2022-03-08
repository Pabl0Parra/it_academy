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

const buttonRam1 = document.getElementById("id_button_ram1");

buttonRam1.addEventListener("click", () => {
  const newRam = document.getElementById("id_new_ram1").value;
  computer1.set(newRam);
  console.log(newRam);
});

const buttonRam2 = document.getElementById("id_button_ram2");

buttonRam2.addEventListener("click", () => {
  const newRam2 = document.getElementById("id_new_ram2").value;
  computer2.set(newRam2);
  console.log(`the new ram for Pc2 is ${newRam2}`);
});

const buttonProcessor1 = document.getElementById("id_button_processor1");

buttonProcessor1.addEventListener("click", () => {
  computer1.getProcessor(processor);
  console.log(`The PC1 has a ${processor} processor`);
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
