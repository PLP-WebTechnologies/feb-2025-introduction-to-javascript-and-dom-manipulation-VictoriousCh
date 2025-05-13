document.addEventListener("DOMContentLoaded", () => {
  // Change text content
  const changeTextBtn = document.getElementById("change-text-btn");
  const dynamicText = document.getElementById("dynamic-text");

  changeTextBtn.addEventListener("click", () => {
    dynamicText.textContent =
      "Text changed dynamically at " + new Date().toLocaleTimeString();
  });

  // Toggle CSS style
  const toggleStyleBtn = document.getElementById("toggle-style-btn");
  const orderedListSection = document.getElementById("ordered-list");
  let isStyled = false;

  toggleStyleBtn.addEventListener("click", () => {
    isStyled = !isStyled;
    orderedListSection.style.backgroundColor = isStyled ? "#d4e6f1" : "#fff";
    orderedListSection.style.borderColor = isStyled ? "#2980b9" : "#ddd";
  });

  // Add list item
  const addItemBtn = document.getElementById("add-item-btn");
  const dynamicList = document.getElementById("dynamic-list");
  let itemCount = 4;

  addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemCount}`;
    dynamicList.appendChild(newItem);
    itemCount++;
  });

  // Remove list item
  const removeItemBtn = document.getElementById("remove-item-btn");

  removeItemBtn.addEventListener("click", () => {
    const lastItem = dynamicList.lastElementChild;
    if (lastItem) {
      dynamicList.removeChild(lastItem);
      itemCount--;
    }
  });
});
