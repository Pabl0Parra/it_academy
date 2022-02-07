function amountLitersFunction() {
  const literCoverage = 12;
  let x = document.getElementById("height").value;
  let y = document.getElementById("lenght").value;
  let w = document.getElementById("layers").value;
  let wallArea = x * y;
  let totalArea = wallArea * w;
  let amountLiters = Math.ceil(totalArea / literCoverage);
  let answer = "You need to purchase " + amountLiters + " liters of paint.";
  const elementTotalLiters = (document.getElementById("buckets").innerHTML =
    answer);
}
