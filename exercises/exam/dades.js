const treballadors = [
  {
    nom: "Ana",
    cognom: "Puig",
    carrec: "venedor(a)",
    disponibilitatTrasllat: true,
  },
  {
    nom: "Lluis",
    cognom: "Soto",
    carrec: "venedor(a)",
    disponibilitatTrasllat: false,
  },
  {
    nom: "Cristina",
    cognom: "Tomas",
    carrec: "administratiu(a)",
    disponibilitatTrasllat: false,
  },
  {
    nom: "Andreu",
    cognom: "Ricart",
    carrec: "venedor(a)",
    disponibilitatTrasllat: true,
  },
  {
    nom: "Pep",
    cognom: "Vila",
    carrec: "venedor(a)",
    disponibilitatTrasllat: false,
  },
  {
    nom: "Núria",
    cognom: "Roure",
    carrec: "administratiu(a)",
    disponibilitatTrasllat: true,
  },
];

//2.b Find employee 'Pep Vila' & create an object persona to save it in.

let persona = [];

function findPep() {
  for (let i = 0; i < treballadors.length; i++) {
    if (treballadors[i].nom === "Pep") {
      document.getElementById("nom1").innerText = treballadors[i].nom;
      document.getElementById("cognoms1").innerText = treballadors[i].cognom;
      document.getElementById("carrec1").innerText = treballadors[i].carrec;
      document.getElementById("trasllat1").innerText =
        treballadors[i].disponibilitatTrasllat;
      persona.push(treballadors[i]);
    }
  }
  console.log(persona);
}

//2.c Extract an array only with the employees willing to relocate

let workersThatCanRelocate = [];

function ableToRelocate() {
  for (let i = 0; i < treballadors.length; i++) {
    if (treballadors[i].disponibilitatTrasllat === true) {
      workersThatCanRelocate.push(treballadors[i]);
    }
  }
  console.log(workersThatCanRelocate);
}
