function checkDNI() {
  if (document.getElementById("id_user_dni").value.length == 0) {
    alert("Please, enter a DNI");
  }

  const INPUT_DNI = document.getElementById("id_user_dni").value;

  const LETTER_POSITION_ = INPUT_DNI.slice(0, INPUT_DNI.length - 1) % 23;

  const LETTER_TABLE = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  const INPUT_DNI_LETTER = INPUT_DNI.charAt(INPUT_DNI.length - 1);

  const RIGHT_DNI_LETTER = LETTER_TABLE[LETTER_POSITION_];

  if (RIGHT_DNI_LETTER === INPUT_DNI_LETTER) {
    return (document.getElementById("id_display_result").innerHTML =
      "The letter is the correct one");
  }
  if (
    RIGHT_DNI_LETTER !== INPUT_DNI_LETTER &&
    document.getElementById("id_user_dni").value.length !== 0
  )
    return (document.getElementById(
      "id_display_result"
    ).innerHTML = `The letter introduced does not match that DNI, the correct letter is: ${RIGHT_DNI_LETTER}`);
}
