// https://github.com/moodle/moodle/blob/master/mod/quiz/module.js#L203

// Rough
// Y.one('body').detach()
// Y.one('document').detach()
// Y.all('*').detach()

let documentEvents = [
  "contextmenu",
  "dragstart",
  "selectstart",
  "cut",
  "copy",
  "paste",
];
let bodyEvents = ["mousedown", "mouseup"];
let keyboardEvents = ["keypress", "keyup", "keydown"];

// Event capturing
let events = [...documentEvents, ...bodyEvents, ...keyboardEvents];
events.forEach((event) => {
  window.addEventListener(
    event,
    (e) => {
      e.stopPropagation();
    },
    true
  );
});

// Precise
// documentEvents.forEach((e) => {
//   Y.one("document").detach(e);
// });

// bodyEvents.forEach((e) => {
//   Y.one("body").detach(e);
// });

// Y.all("*").detach("key");
