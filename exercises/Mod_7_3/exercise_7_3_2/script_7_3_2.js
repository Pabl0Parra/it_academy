function flipString() {
  let reversedString = "";

  const USERSTRING = document.getElementById("id_user_string").value;

  for (i = USERSTRING.length - 1; i >= 0; i--) {
    reversedString += USERSTRING.charAt(i);
  }
  return (document.getElementById(
    "id_display_reversed"
  ).innerHTML = `We have flipped your string, here you have it: <em>${reversedString}</m>.`);
}
