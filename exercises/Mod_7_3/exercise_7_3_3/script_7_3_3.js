function isPalindrome() {
  let reversedString = "";

  const USERSTRING = document.getElementById("id_user_sentence").value;

  for (i = USERSTRING.length - 1; i >= 0; i--) {
    reversedString += USERSTRING.charAt(i);
  }
  if (USERSTRING === reversedString) {
    return (document.getElementById(
      "id_display_result"
    ).innerHTML = `The sentence <em>${USERSTRING}</em> is a palindrome`);
  }
  if (USERSTRING !== reversedString) {
    return (document.getElementById(
      "id_display_result"
    ).innerHTML = `The sentence <em>${USERSTRING}</em> is not a palindrome`);
  }
}
