function isPalindrome() {
  let reversedString = "";

  if (document.getElementById("id_user_sentence").value.length == 0) {
    alert("Please enter a sentence");
  }

  const USER_STRING = document.getElementById("id_user_sentence").value;

  for (i = USER_STRING.length - 1; i >= 0; i--) {
    reversedString += USER_STRING.charAt(i);
  }
  if (
    USER_STRING === reversedString &&
    document.getElementById("id_user_sentence").value.length !== 0
  ) {
    return (document.getElementById(
      "id_display_result"
    ).innerHTML = `The sentence <em>${USER_STRING}</em> is a palindrome`);
  }
  if (USER_STRING !== reversedString) {
    return (document.getElementById(
      "id_display_result"
    ).innerHTML = `The sentence <em>${USER_STRING}</em> is not a palindrome`);
  }
}
