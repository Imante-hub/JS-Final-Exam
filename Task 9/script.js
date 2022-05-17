/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  getIntroduction = function () {
    return `${this.title}, ${this.director}, ${this.budget}`;
  };
  getBudget() {
    return this.budget - this.budget;
  }
}
const Movie1 = new Movie("Avatar", "James Cameron", "237 000 000");
const Movie2 = new Movie("Titanic", "James Cameron", "100 000 001");

console.log(`${Movie1.getIntroduction()}, biudžetas ${Movie1.getBudget()} USD`);

console.log(`${Movie2.getIntroduction()}, biudžetas ${Movie2.getBudget()} USD`);
