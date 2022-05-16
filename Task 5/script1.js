/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

let users = [
  { name: "John Smith", age: 20, hasDog: true },
  { name: "Ann Smith", age: 24, hasCat: false },
  { name: "Tom Jones", age: 31, hasDog: true },
  { name: "Rose Peterson", age: 17, hasCat: false },
  { name: "Alex John", age: 25, hasDog: true },
  { name: "Ronald Jones", age: 63, hasDog: true },
  { name: "Elton Smith", age: 16, hasDog: true },
  { name: "Simon Peterson", age: 30, hasCat: false },
  { name: "Daniel Cane", age: 51, hasDog: true },
];

let usersNames = users
  .filter((user) => animal.type === "hasDog")
  .map((hasDog) => hasDog.name);

console.log(usersNames); //
