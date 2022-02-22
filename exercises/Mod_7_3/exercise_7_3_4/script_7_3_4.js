function checkDNI() {
  const USERDNI = document.getElementById("id_user_dni").value;

  const LETTERPOSITIONRESULT = USERDNI.slice(0, USERDNI.length - 1) % 23;

  const ASSIGNLETTERTONUMBER = [
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

  const USERDNILETTER = USERDNI.charAt(USERDNI.length - 1);

  const RIGHTDNILETTER = ASSIGNLETTERTONUMBER[LETTERPOSITIONRESULT];

  if (RIGHTDNILETTER === USERDNILETTER) {
    return (document.getElementById("id_display_result").innerHTML =
      "The letter is the correct one");
  }
  return (document.getElementById(
    "id_display_result"
  ).innerHTML = `The letter introduced does not match that DNI, the correct letter is: ${RIGHTDNILETTER}`);
}
