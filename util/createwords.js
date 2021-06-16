var fs = require("fs");

var content = fs.readFileSync("./wordlist2.txt", "utf-8");
var split = content.split("\n");
var newContent = split.reduce((tot, cur) => {
  tot += `"${cur}",`;
  return tot;
}, `{"words":[`);
newContent = newContent.substr(0, newContent.length - 1);
newContent += `]}`;
fs.writeFileSync("wordlist.json", newContent, { encoding: "utf-8" });
