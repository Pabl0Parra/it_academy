const selectionButtons = document.querySelectorAll("[data-selection]");
const allOptions = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },

  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },

  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = allOptions.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});
function makeSelection(selection) {
  const computerSelection = randomSelection();
  console.log(computerSelection); /* till here the code for user*/
}

function randomSelection() {
  const ramdonIndex = Math.floor(
    Math.random() * allOptions.lenght
  ); /*without the math.floor it will gives a # between 0-2,999. With math floor it will give us a · between 0-2 which r the indexes of the array*/
  return allOptions[ramdonIndex];
}
