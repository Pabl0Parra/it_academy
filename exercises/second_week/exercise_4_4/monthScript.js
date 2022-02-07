function printMonthDays() {
  let monthNumber = parseInt(document.getElementById("month").value);

  switch (monthNumber) {
    case 1:
      document.write("January has 31 days");
      break;
    case 2:
      document.write("February has 29 days");
      break;
    case 3:
      document.write("March has 31 days");
      break;
    case 4:
      document.write("April has 30 days");
      break;
    case 5:
      document.write("May has 31 days");
      break;
    case 6:
      document.write("June has 30 days");
      break;
    case 7:
      document.write("July has 31 days");
      break;
    case 8:
      document.write("August has 31 days");
      break;
    case 9:
      document.write("September has 30 days");
      break;
    case 10:
      document.write("October has 31 days");
      break;
    case 11:
      document.write("November has 30 days");
      break;
    case 12:
      document.write("December has 31 days");
      break;
    default:
      alert(" 🚫 Enter monthNumber value between 1-12 🚫");
  }
}
