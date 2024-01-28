const progressVal = document.querySelector(".progress-value");
const error = document.querySelector(".error");
const circle = document.querySelectorAll(".circle");
const first_circle = document.querySelector(".first-circle");
const second_circle = document.querySelector(".second-circle");
const third_circle = document.querySelector(".third-circle");
const first_input = document.querySelector(".first-input");
const second_input = document.querySelector(".second-input");
const third_input = document.querySelector(".third-input");

/////first function ///

first_input.addEventListener("keyup", (e) => {
  if (e.target.value.length !== 0) {
    first_circle.addEventListener("click", () => {
      first_circle.classList.toggle("clicked");
      progressVal.style.width = "35%";
    });
  }
});

second_input.addEventListener("keyup", (e) => {
  if (e.target.value.length !== 0) {
    second_circle.addEventListener("click", () => {
      second_circle.classList.toggle("clicked");
      progressVal.style.width = "70%";
    });
  }
});

third_input.addEventListener("keyup", (e) => {
  if (e.target.value.length !== 0) {
    third_circle.addEventListener("click", () => {
      third_circle.classList.toggle("clicked");
      progressVal.style.width = "100%";
    });
  }
});
