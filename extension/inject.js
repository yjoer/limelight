const createScript = (scriptFile) => {
  let t0 = performance.now();
  let script = document.createElement("script");

  script.src = chrome.runtime.getURL(scriptFile);

  script.onload = () => {
    script.remove();
    let t1 = performance.now();
    console.log(`Script (${scriptFile}) loaded in ${t1 - t0} milliseconds`);
  };

  (document.head || document.documentElement).appendChild(script);
};

const inject = () => {
  let scripts = [
    "remove-event-listeners.js",
    "enhance-video-player.js",
    "add-question-number.js",
  ];

  for (let script of scripts) {
    createScript(script);
  }
};

window.addEventListener("load", inject);
