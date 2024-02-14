/**
 *          PSEUDOCODE
 *          ----------
 *     -> Get a handle/reference of the button
 *     -> get the inputs
 *     -> create a function that does something
 *     -> Attach a event listener
 *     -> connect the event listener to the function
 *
 */

// getting HTML element references
const buttonRef = document.querySelector("#btn");
const dayRef = document.querySelector("#day");
const monthRef = document.querySelector('#month');
const yearRef = document.querySelector("#year");

// declaring the function
function myCuteFunction() {
  console.log("The value provided as day is:", dayRef.value)
}

// // calling the function
// myCuteFunction()

// connect the event listener to the function
buttonRef.addEventListener("click", myCuteFunction);


