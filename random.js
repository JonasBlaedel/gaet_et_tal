window.addEventListener("load", generateRandomNumber);
window.addEventListener("load", ditTalInput);

let randomNumber = generateRandomNumber();
let ditTal;

function generateRandomNumber() {
  return Math.floor(Math.random() * 99) + 1;
}

function ditTalInput() {
  document.querySelector("button").addEventListener("click", tjekTal);
}

function tjekTal() {
  const val = document.querySelector("input").value;
  console.log(val);
  ditTal = Number(val);
  if (ditTal > randomNumber) {
    document.querySelector("#answer").textContent = "Too high! Please guess lower.";
    document.querySelector("#answer").classList.remove("winner");
  } else if (ditTal < randomNumber) {
    document.querySelector("#answer").textContent = "Too low! Please guess higher.";
    document.querySelector("#answer").classList.remove("winner");
  } else {
    document.querySelector("#answer").textContent = `Your guessed correct! The number was ${randomNumber}!`;
    document.querySelector("#answer").classList.add("winner");
  }
}

console.log(randomNumber);
