const scoreValues = [20, 30, 45, 50, 120, 350];
let totalScores = 0;
for (let value of scoreValues) {
  totalScores += value;
}

console.log(totalScores);

const programmers = [
  { name: "Ivan", favoriteLanguage: "Python", sallary: 200000 },
  { name: "Anna", favoriteLanguage: "C++", sallary: 250000 },
  { name: "Oleg", favoriteLanguage: "JavaScript", sallary: 320000 },
];
let totalSalary = 0;
for (let programmer of programmers) {
  totalSalary += programmer.sallary;
}
console.log(totalSalary);
