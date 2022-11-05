const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];
const playerScorePoints = [4500, 3600, 3433, 2356];
let MaxScorePoint = 0;
for (let player of players) {
  MaxScorePoint = Math.max(...playerScorePoints);
}
console.log(MaxScorePoint);
