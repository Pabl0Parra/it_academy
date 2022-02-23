function flipString() {
  let reversedString = "";

  const USER_STRING = document.getElementById("id_user_string").value;

  for (i = USER_STRING.length - 1; i >= 0; i--) {
    //I use -1 bc the characters in the string are indexed from 0
    reversedString += USER_STRING[i];
  }
  return (document.getElementById(
    "id_display_reversed"
  ).innerHTML = `We have flipped your string, here you have it: <em>${reversedString}</m>.`);
}
