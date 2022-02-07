const person = "María";
console.log(person); //output 'María'

const fruits = ["Apple", "Pinneaple", "Pearl"];
console.log(fruits[0]); //output 'Apple'

const exampleList = [1, "dos", [3, 4], true];
console.log(exampleList[1]); //output 'dos'

const exempleString = "I'm a string";
console.log(exempleString[0]); //output: 'I'

const exampleBoolean = true;
console.log(exampleBoolean);

const exempleUndefined = undefined;
console.log(exempleUndefined);

const exempleNull = null;
console.log(exempleNull);

const firstName = "Pepito";
firstName.toUpperCase();
console.log(firstName); // output: Pepito, expected: PEPITO

let value = true;

value = String(value); // "true"
console.log(typeof value); // string

let value = "123";

value = Number(value); // 123
console.log(typeof value); // number

const persona = {
  nom: "Pepito",
  cognom: "Grillo",
  edat: 45,
  greeting: function () {
    console.log("hello!");
  },
  cities: ["Barcelona", "Madrid"],
};

console.log(persona.nom); // Output: Pepito
console.log(persona["nom"]); // Output: Pepito
console.log(persona.cities[0]); // Output: Barcelona
console.log(persona.greeting()); // Output: hello!

const persona = { nom: "Pepito", cognom: "Grillo", edat: 45 };

persona.city = "Barcelona";
console.log(persona); // Output: { nom: 'Pepito', cognom: 'Grillo', edat: 45, city: 'Barcelona' }
