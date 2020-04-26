console.log("Start");
var t0 = performance.now();

var s = document.createElement("script");
s.src = chrome.runtime.getURL("remove-event-listeners.js");
s.onload = function () {
  this.remove();
  var t1 = performance.now();
  console.log(`End: ${t1 - t0} milliseconds`);
};

(document.head || document.documentElement).appendChild(s);
