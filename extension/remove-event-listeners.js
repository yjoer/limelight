// https://github.com/moodle/moodle/blob/master/mod/quiz/module.js#L203

let documentEvents = [
  "contextmenu",
  "dragstart",
  "selectstart",
  "cut",
  "copy",
  "paste",
];
let mouseEvents = ["mousedown", "mouseup"];

// Rough
// Y.one('body').detach()
// Y.one('document').detach()
// Y.all('*').detach()

// Precise
documentEvents.forEach((e) => {
  Y.one("document").detach(e);
});

mouseEvents.forEach((e) => {
  Y.one("body").detach(e);
});

Y.all("*").detach("key");
