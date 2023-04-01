const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");

let calculation = "";

function addToScreen(val) {
  calculation += val;
  screen.textContent = calculation;
}

btn.forEach((b) => {
  b.addEventListener("click", () => {
    if (b.id === "clear") {
      calculation = "";
      screen.textContent = "";
    } else if (b.id === "equal"){
        calculation = eval(calculation)
        screen.textContent = calculation
    } else addToScreen(b.textContent);
  });
}); 

