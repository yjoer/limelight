let documentEvents = [
  "contextmenu",
  "dragstart",
  "selectstart",
  "cut",
  "copy",
  "paste",
];
let mouseEvents = ["mousedown", "mouseup"];
let keyboardEvents = ["keypress", "keyup", "keydown"];

const CTRL_KEY = 17;
const COMMAND_KEY = 91;
const C_KEY = 67;
const V_KEY = 86;
const X_KEY = 88;

let keyState = {
  ctrlKeyDown: false,
};

const interceptMouseEvents = (e) => {
  let classes = ["ace_content"];

  if (mouseEvents.includes(e.type)) {
    for (className of classes) {
      if (e.target.classList.contains(className)) {
        return false;
      }
    }
  }

  return true;
};

const interceptKeyboardEvents = (e) => {
  if (e.type == "keydown") {
    if (e.keyCode == CTRL_KEY || e.keyCode == COMMAND_KEY) {
      keyState.ctrlKeyDown = true;
    }
  }

  if (e.type == "keyup") {
    if (e.keyCode == CTRL_KEY || e.keyCode == COMMAND_KEY) {
      keyState.ctrlKeyDown = false;
    }
  }

  if (e.type == "keyup" || e.type == "keydown") {
    console.log(e.target);
    if (keyState.ctrlKeyDown && [C_KEY, V_KEY, X_KEY].includes(e.keyCode)) {
      return true;
    }
  }

  return false;
};

for (documentEvent of documentEvents) {
  window.addEventListener(
    documentEvent,
    (event) => {
      event.stopPropagation();
    },
    true
  );
}

for (mouseEvent of mouseEvents) {
  window.addEventListener(
    mouseEvent,
    (event) => {
      if (interceptMouseEvents(event)) {
        event.stopPropagation();
      }
    },
    true
  );
}

for (keyboardEvent of keyboardEvents) {
  window.addEventListener(
    keyboardEvent,
    (event) => {
      if (interceptKeyboardEvents(event)) {
        event.stopPropagation();
      }
    },
    true
  );
}
