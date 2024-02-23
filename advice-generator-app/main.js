// Set up a ref to the button
var btnDice = document.querySelector("#btn-dice");

// Create a function to fetch a new advice
async function displayNewAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceId.textContent = 'ADVICE: ' + data.slip.id;
    console.log(data);
    adviceText.textContent = data.slip.advice;

  } catch (error) {
    console.log("Something went wrong");
  }
}

// Attach the function to the button event listener
btnDice.addEventListener("click", displayNewAdvice);

let adviceId = document.querySelector("#advice-id")

let adviceText = document.querySelector("#advice-text")
