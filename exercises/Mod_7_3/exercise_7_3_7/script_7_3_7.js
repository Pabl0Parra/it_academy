const NOODLESPERSERVING = 500 / 4;
const SQUIDPERSERVING = 400 / 4;
const SHRIMPPERSERVING = 200 / 4;

const KILOGRAM = 1000;

function calculatePrice() {
  let foodies = Number(document.getElementById("id_foodies").value);
  let noodlesPrice = Number(document.getElementById("id_noodles").value);
  let squidPrice = Number(document.getElementById("id_squid").value);
  let shrimpPrice = Number(document.getElementById("id_shrimp").value);

  const TOTALAMOUNTNOODLES = NOODLESPERSERVING * foodies;
  const TOTALAMOUNTSQUIDS = SQUIDPERSERVING * foodies;
  const TOTALAMOUNTSHRIMPS = SHRIMPPERSERVING * foodies;

  document.getElementById(
    "id_totalingredients"
  ).innerHTML = `To make this fideua, we are going to need ${TOTALAMOUNTNOODLES} kgs of noodles, also ${TOTALAMOUNTSQUIDS} kgs of squid and ${TOTALAMOUNTSHRIMPS} kgs of shrimps`;

  let servingPrice = n;
  let totalPrice;
}