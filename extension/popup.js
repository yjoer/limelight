chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  let currentTab = tabs[0];
  let url = new URL(currentTab.url);

  let elements = document.getElementsByClassName("settings__item-text");
  elements[0].innerHTML += ` <b>${url.hostname}</b>`;
});
