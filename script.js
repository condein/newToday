const progressVal = document.querySelector(".progress-value");
const error = document.querySelector(".error");
const circle = document.querySelectorAll(".circle");
const inputs = document.querySelectorAll("input");

inputs.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    if (e.target.value.length !== 0) {
      circle.forEach((e) => {
        e.addEventListener("click", () => {
          e.classList.toggle("clicked");
          progressVal.style.width = "90%";
        });
      });
    }
  });
});

inputs.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    if (e.target.value.length === 0) {
      circle.forEach((e) => {
        e.addEventListener("click", () => {
          console.log("clicked");
          error.style.display = "block";
        });
      });
    }
  });
});
