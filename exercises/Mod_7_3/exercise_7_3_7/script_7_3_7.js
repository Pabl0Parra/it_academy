const NOODLESPERSERVING = 500 / 4;
const SQUIDPERSERVING = 400 / 4;
const SHRIMPPERSERVING = 200 / 4;

const KILOGRAM = 1000;

function calculatePrice() {
  const FOODIES = Number(document.getElementById("id_foodies").value);
  const NOODLESPRICE = Number(document.getElementById("id_noodles").value);
  const SQUIDPRICE = Number(document.getElementById("id_squid").value);
  const SHRIMPRICE = Number(document.getElementById("id_shrimp").value);

  const TOTALAMOUNTNOODLES = (NOODLESPERSERVING / KILOGRAM) * FOODIES;
  const TOTALAMOUNTSQUIDS = (SQUIDPERSERVING / KILOGRAM) * FOODIES;
  const TOTALAMOUNTSHRIMPS = (SHRIMPPERSERVING / KILOGRAM) * FOODIES;

  document.getElementById(
    "id_totalingredients"
  ).innerHTML = `To make this fideua, we are going to need ${TOTALAMOUNTNOODLES} kgs of noodles, also ${TOTALAMOUNTSQUIDS} kgs of squid and ${TOTALAMOUNTSHRIMPS} kgs of shrimps`;

  const TOTALNOODLESPRICE = TOTALAMOUNTNOODLES * NOODLESPRICE;
  const TOTALSQUIDPRICE = TOTALAMOUNTSQUIDS * SQUIDPRICE;
  const TOTALSHRIMPSPRICE = TOTALAMOUNTSHRIMPS * SHRIMPRICE;

  const TOTALFIDEUAPRICE =
    TOTALNOODLESPRICE + TOTALSQUIDPRICE + TOTALSHRIMPSPRICE;
  const PRICEPERSERVING = TOTALFIDEUAPRICE / FOODIES;

  document.getElementById(
    "id_priceperserving"
  ).innerHTML = `The price per serving is €${PRICEPERSERVING}`;
  document.getElementById(
    "id_totalfideuaprice"
  ).innerHTML = `The cost of the fideua for ${FOODIES} is €${TOTALFIDEUAPRICE}`;
}
