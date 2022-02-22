function enterWords() {
  //ask how many words are going to be enter
  let N = parseInt(document.getElementById("wordNumber").value);

  //Create an empty array to push the words entered
  const words = [];
  let content = "Words List:\n";
  //Complete this loop the same amount of times as the user entered in the prompt
  for (let i = 0; i < N; i++) {
    //Prompt window for each word + push users response to an array
    words.push(prompt("Enter your words: "));
    content += `${i} ${words[i]} \n`;
    console.log(content);

    document.write(
      "The word entered has an index of " +
        i +
        " " +
        "and the word entered is " +
        words[i] +
        "<br /><br />"
    );
  }
}
