// Set up a ref to the button
// <button id="btn-dice">

var btnDice = document.querySelector("#btn-dice");

function displayNewAdvice() {
  // this is where we want to consume that API

  // How do we consume the API
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (response.ok === true) {
        console.log("API reached; here is the raw data");
        console.log(response);
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      console.log("API reached; here is the actual body content");
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function displayNewAdvicev2() {
  console.log("This is v2");

  try {
    const response = await fetch("https://api.adviceslip.com/advicxxxe");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // TBD We still have to figure out how to log a proper error
    console.log("Something went wrong");
  }
}

// .catch(error => {
//   console.error('Error:', error);

btnDice.addEventListener("click", displayNewAdvicev2);

// const getAllDestinations = async (req, res) => {
//   try {
//     const destinations = await Destination.find({})
//     console.log(destinations)
//     return res.status(200).json({ destinations })
//   } catch (error) {
//     console.log(error.message)
//     return res.status(500).json({ error: error.message })
//   }
// }

// Create a function that prints a message

// Attach the function to the button event listener

//fetch(apiUrl)
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })
// .then(userData => {
//   // Process the retrieved user data
//   console.log('User Data:', userData);
// })
// .catch(error => {
//   console.error('Error:', error);
// });

// const apiUrl = 'https://api.example.com/data';

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       if (response.status === 404) {
//         throw new Error('Data not found');
//       } else if (response.status === 500) {
//         throw new Error('Server error');
//       } else {
//         throw new Error('Network response was not ok');
//       }
//     }
//     return response.json();
//   })
//   .then(data => {
//     outputElement.textContent = JSON.stringify(data, null, 2);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
