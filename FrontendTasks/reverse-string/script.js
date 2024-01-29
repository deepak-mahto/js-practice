const input = document.getElementById("input");
const button = document.getElementById("button");
const inputValue = document.getElementById("input-value");
const mirrorValue = document.getElementById("mirror-value");

input.addEventListener("keyup", () => {
  inputValue.innerText = input.value;
});

button.addEventListener("click", () => {
  if (input.value.length > 0) {
    mirrorValue.innerText = input.value.split("").reverse("").join("");
  } else {
    mirrorValue.innerText = "";
  }
});
