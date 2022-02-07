function calculateSign() {
  let month = parseInt(document.getElementById("monthNumber").value);
  let day = parseInt(document.getElementById("dayNumber").value);

  function correctDate() {
    return zodiacSignDictionary[month] && day >= 1 && day <= 31 && month != 0;
  }
  function retrieveSign() {
    return day < zodiacSignDictionary[month].startDay
      ? zodiacSignDictionary[month].firstSign
      : zodiacSignDictionary[month].secondSign;
  }
}
if (!correctDate()) alert("Enter a valid date");

if (correctDate()) {
  document.getElementById("result").textContent = `${retrieveSign()}`;
}

const zodiacSignDictionary = {
  1: { firstSign: "Capricorn", secondSign: "Aquarius", startDay: 20 },
  2: { firstSign: "Aquarius", secondSign: "Pisces", startDay: 19 },
  3: { firstSign: "Pisces", secondSign: "Aries", startDay: 21 },
  4: { firstSign: "Aries", secondSign: "Taurus", startDay: 20 },
  5: { firstSign: "Taurus", secondSign: "Gemini", startDay: 21 },
  6: { firstSign: "Gemini", secondSign: "Cancer", startDay: 21 },
  7: { firstSign: "Cancer", secondSign: "Leo", startDay: 23 },
  8: { firstSign: "Leo", secondSign: "Virgo", startDay: 23 },
  9: { firstSign: "Virgo", secondSign: "Libra", startDay: 23 },
  10: { firstSign: "Libra", secondSign: "Scorpio", startDay: 23 },
  11: { firstSign: "Scorpio", secondSign: "Sagitarius", startDay: 22 },
  12: { firstSign: "Sagitarius", secondSign: "Capricorn", startDay: 22 },
};
