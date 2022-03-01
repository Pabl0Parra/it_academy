let i = 0;

function createComputers() {
  while (i < 2) {
    let brand = prompt("Who's the computer maker?").value;

    let model = prompt("What's the computer model?").value;

    let processor = prompt("What's the processor name?").value;

    let ramAmount = prompt("What's the RAM?").value;

    let hardDriveSize = prompt("What's the hard-drive size?").value;
  }
  i++;

  let computer = new Computers(
    brand,
    model,
    processor,
    ramAmount,
    hardDriveSize
  );

  console.log(computer);
}
