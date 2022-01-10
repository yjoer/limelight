const buttonList = document.querySelector("#mod_quiz_navblock .qn_buttons");

for (const child of buttonList?.children ?? []) {
  if (!child.id) {
    continue;
  }

  const match = child.id.match(/^([a-z]+)(\d+)$/);

  if (match.length !== 3) {
    continue;
  }

  const questionNumber = match[2];

  const newNode = document.createElement("div");
  newNode.innerHTML = `(${questionNumber})`;
  newNode.style.color = "hsla(0, 0%, 0%, 0.56)";
  newNode.style.position = "relative";

  for (const childNode of child.childNodes) {
    if (childNode.nodeType !== Node.TEXT_NODE) {
      continue;
    }

    child.insertBefore(newNode, childNode.nextSibling);
  }

  child.style.setProperty("height", "auto", "important");
  child.style.setProperty("line-height", "1rem", "important");
  child.style.setProperty("padding", "4px 0", "important");
}
