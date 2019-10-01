const input = document.getElementById("guess-input");
const submitBtn = document.getElementById("guess-value");
const message = document.getElementById("message");

let min = 1;
let max = 10;
let random = (Math.random() * (max - min)).toFixed();
let guessesLeft = 3;


document.addEventListener("mousedown", function (e) {
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  }
})

function setStyle(color) {
  submitBtn.className += "play-again";
  submitBtn.value = "Zagraj ponownie";
  input.disabled = true;
  message.style.color = color;
}

submitBtn.addEventListener("click", function (e) {

  if (input.value == random) {
    message.textContent = `Wygrana!!! Zagraj jeszcze raz`;
    input.value = "";
    setStyle("green");
  } else {
    guessesLeft -= 1;

    if (guessesLeft == 0) {
      message.textContent = `Koniec gry. Spróbuj jeszcze raz`;
      input.value = "";
      setStyle("red");
    } else {
      message.textContent = `Pudło. Szanse do końca: ${guessesLeft}`;
      input.value = "";
      message.style.color = "red";
    }
  }
  e.preventDefault();
});

