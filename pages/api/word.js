const fs = require("fs");
const words = fs.readFileSync("wordlist.txt", "utf-8").split("\n");
export default function handler(req, res) {
  const nextIndex = getRandomInt(0, words.length - 1);
  res.status(200).json({ word: words[nextIndex], totalCount: words.length });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
