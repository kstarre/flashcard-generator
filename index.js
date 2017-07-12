let BasicCard = require('./BasicCard');
let ClozeCard = require('./ClozeCard');

let firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);
console.log(firstPresident.back);

let firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);

let awesomeGuy = new BasicCard("Who wrote the musical Hamilton?", "Lin-Manuel Miranda");
console.log(awesomeGuy.front);
console.log(awesomeGuy.back);

let awesomeGuyCloze = new ClozeCard("Lin-Manuel Miranda wrote the musical Hamilton.", "Lin-Manuel Miranda");
console.log(awesomeGuyCloze.cloze);
console.log(awesomeGuyCloze.partial);
console.log(awesomeGuyCloze.fullText);

let brokenCloze = new ClozeCard("This doesn't work.", "Oops!");