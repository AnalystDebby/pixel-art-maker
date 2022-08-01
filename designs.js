// Store elements in variables
const canvas = document.getElementById("pixelCanvas");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const submit = document.getElementById("submit");

// @description: create grid of rows and columns
function makeGrid(e) {
  // Prevent the page from reloading on submitting the form
  e.preventDefault();
  // Clear the grid before creating a new one
  canvas.innerHTML = "";
  // Get the value of the input field with id='height'
  const height = inputHeight.value;
  // Get the value of the input field with id='width'
  const width = inputWidth.value;
  // Add the grid to the canvas
  for (let i = 0; i < height; i++) {
    const row = canvas.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
      cell.addEventListener("click", function () {
        const color = colorPicker.value;
        cell.style.backgroundColor = color;
      });
    }
  }
}

// When size is submitted by the user, call makeGrid()
submit.addEventListener("click", makeGrid);
