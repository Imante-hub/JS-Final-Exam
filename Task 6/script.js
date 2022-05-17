/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

let users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

//Užduoties nr. 1 ATSAKYMAS:

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

/*let john = { name: "John Smith", age: 20 },
  let ann = { name: "Ann Smith", age: 24 },
  let tom = { name: "Tom Jones", age: 31 },
  let rose: { name: "Rose Peterson", age: 17 },
  let alex = { name: "Alex John", age: 25 },
  let ronald = { name:"Ronald Jones", age: 63 },
  let elton = { name: "Elton Smith", age: 16 },
  let simon = {name: "Simon Peterson", age: 30 },
  let daniel + {name: "Daniel Cane", age: 51 },*/

/*function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}*/

let arr = [john, ann, tom, rose, alex, ronald, elton, simon, daniel];

alert(getAverageAge(arr));

//UŽDUOTIES nr. 2 ATSAKYMAS:

/*let users = [john, ann, tom, rose, alex, ronald, elton, simon, daniel];*/

let names = users.map((item) => item.name);

alert(names);
