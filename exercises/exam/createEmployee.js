//2.d Create class Treballadors from the array

class Treballadors {
  nom;
  cognom;
  carrec;
  disponibilitatTrasllat;

  constructor(nom, cognom, carrec, disponibilitatTrasllat) {
    this.nom = nom;
    this.cognom = cognom;
    this.carrec = carrec;
    this.disponibilitatTrasllat = disponibilitatTrasllat;
  }
}

function createEmployee() {
  nom = document.getElementById("nom2").innerText = "Pablo";
  cognom = document.getElementById("cognoms2").innerText = "Parra";
  carrec = document.getElementById("carrec2").innerText = "La Rambla";
  disponibilitatTrasllat = document.getElementById(
    "trasllat2"
  ).innerText = true;

  const Pabs = new Treballadors(nom, cognom, carrec, disponibilitatTrasllat);
  console.log(Pabs);
  return Pabs;
}
