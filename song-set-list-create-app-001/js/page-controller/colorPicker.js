const colorPickerController = (() => {
  const elements = {
    colorPicker: document.getElementById("color-picker"),
    selectedColor: document.getElementById("selected-color"),
  }

  const handleColorChange = (event) => {
    const selectedHexColor = event.target.value;
    elements.selectedColor.textContent = selectedHexColor;
    localStorage.setItem("selectedColor", selectedHexColor);
  };

  const init = () => {
    elements.colorPicker.addEventListener("input", handleColorChange);
  };

  return {
    init,
  };
})();

colorPickerController.init();