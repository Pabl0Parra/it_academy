function isUpperOrLower() {
  const USERSTRING = document.getElementById("id_user_string").value;

  if (!isNaN(USERSTRING * 1)) {
    return (document.getElementById(
      "id_display_result"
    ).innerHTML = `The entered sentece ${USERSTRING} can't have numbers in it!`);
  } else {
    if (USERSTRING == USERSTRING.toUpperCase()) {
      return (document.getElementById(
        "id_display_result"
      ).innerHTML = `The sentence ${USERSTRING} is made up of upper case characters.`);
    }
    if (USERSTRING == USERSTRING.toLowerCase()) {
      return (document.getElementById(
        "id_display_result"
      ).innerHTML = `The sentence ${USERSTRING} is made up of lower case characters.`);
    }
    if (
      USERSTRING !== USERSTRING.toUpperCase() &&
      USERSTRING !== USERSTRING.toLowerCase()
    ) {
      return (document.getElementById(
        "id_display_result"
      ).innerHTML = `The sentence ${USERSTRING} is made up of both upper & lower case characters.`);
    }
  }
}
