let button = document.getElementById("toggle");

button.addEventListener("click", () => {
  if (button.innerText == "Off") {
    button.innerText = "On";
  } else {
    button.innerText = "Off";
  }
});
