// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
const errorMessage = document.getElementById("error-message");
// Function to fetch weather alerts from the API
async function fetchWeatherAlerts(state) {
  try {
    // Send a GET request to the API using the state abbreviation
    const response = await fetch(`${weatherApi}${state}`);
    // Convert the response into a JavaScript object
    const data = await response.json();
    // Clear previous error messages
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
    displayAlerts(data); // Log the returned data for testing
  } catch (error) {
    displayError(error.message); // Display weather alerts on the page
  }
}

// Function to display weather alerts on the page
function displayAlerts(data) {
    // Get the div in html where alerts will be displayed
    const alertsDisplay = document.getElementById("alerts-display");
    // Display the title and number of alerts
    alertsDisplay.innerHTML =
        `<h2>${data.title}: ${data.features.length}</h2>`;
    // Loop through each alert in the features array
    data.features.forEach(function (alert) {
        // Add each alert headline to the page
        alertsDisplay.innerHTML +=
            `<p>${alert.properties.headline}</p>`;
    });
}

// Get the input field
const stateInput = document.getElementById("state-input");
// Get the fetch button
const fetchButton = document.getElementById("fetch-alerts");
// Run when button is clicked
fetchButton.addEventListener("click", function () {
    // Get state abbreviation entered by the user
    const state = stateInput.value;
    // Fetch weather alerts for the selected state
    fetchWeatherAlerts(state);
    // Clear input field after request starts
    stateInput.value = "";
});

// Function to display an error message
function displayError(message) {
    // Show the error message
    errorMessage.textContent = message;
    // Make the error div visible
    errorMessage.classList.remove("hidden");

}