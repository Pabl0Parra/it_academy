function findHoroscope() {
  let month = parseInt(prompt("Please, enter the month of your birthday:"));
  let day = parseInt(prompt("Please, enter the day you were born:"));

  function correctDay() {
    return day >= 1 && day <= 31;
  }

  if (!correctDay())
    document.getElementById("result").textContent = "Enter a valid day: 1 - 31";

  if (correctDay()) {
    switch (month) {
      case 1:
        if (day <= 19) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Capricorn (22.12 — 19.01) `;
        }
        if (day > 19) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Aquarius (20.01 — 18.02)`;
        }
        break;
      case 2:
        if (day <= 18) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Aquarius (20.01 — 18.02) `;
        }
        if (day > 18) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Piscis (19.02 — 20.03)`;
        }
        break;
      case 3:
        if (day <= 20) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Piscis (19.02 — 20.03)`;
        }
        if (day > 20) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Aries (21.03 — 19.04)`;
        }
        break;
      case 4:
        if (day <= 19) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Aries (21.03 — 19.04)`;
        }
        if (day > 19) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Taurus (20.04 — 20.05)`;
        }
        break;
      case 5:
        if (day <= 20) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Taurus (20.04 — 20.05)`;
        }
        if (day > 20) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Gemini (21.05 — 20.06)`;
        }
        break;
      case 6:
        if (day <= 20) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Gemeni (21.05 — 20.06)`;
        }
        if (day > 20) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Cancer (21.06 — 22.07)`;
        }
        break;
      case 7:
        if (day <= 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Cancer (21.06 — 22.07)`;
        }
        if (day > 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Leo (23.07 — 22.08)`;
        }
        break;
      case 8:
        if (day <= 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Leo (23.07 — 22.08)`;
        }
        if (day > 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Virgo (23.08 — 22.09)`;
        }
        break;
      case 9:
        if (day <= 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Virgo (23.08 — 22.09)`;
        }
        if (day > 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Libra (23.09 — 22.10)`;
        }
        break;
      case 10:
        if (day <= 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Libra (23.09 — 22.10)`;
        }
        if (day > 22) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Scorpio (23.10 — 21.11)`;
        }
        break;
      case 11:
        if (day <= 21) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Scorpio (23.10 — 21.11)`;
        }
        if (day > 21) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Sagitarius (22.11 — 21.12`;
        }
        break;
      case 12:
        if (day <= 21) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Sagitarius (22.11 — 21.12`;
        }
        if (day > 21) {
          document.getElementById(
            "result"
          ).textContent = `Your sign is Capricorn (22.12 — 19.01)`;
        }
        break;
      default:
        document.getElementById(
          "result"
        ).textContent = `Choose a valid number from 1-12`;
    }
  }
  document.getElementById("monthes").textContent = `Month inputed ${month}`;
  document.getElementById("days").textContent = `Day inputed ${day}`;
}
