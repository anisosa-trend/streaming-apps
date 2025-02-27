const colorPicker = document.getElementById("color-picker");
const selectedColor = document.getElementById("selected-color");

colorPicker.addEventListener("input", function(event) {
  const selectedHexColor = event.target.value;
  selectedColor.textContent = event.target.value;
  localStorage.setItem("selectedColor", selectedHexColor);
});