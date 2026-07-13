// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
// Initial URL for the National Weather Service API
const weatherApi = "https://api.weather.gov/alerts/active?area=";
// Function to fetch weather alerts from the API
async function fetchWeatherAlerts(state) {
  try {
    // Send a GET request to the API using the state abbreviation
    const response = await fetch(`${weatherApi}${state}`);
    // Convert the response into a JavaScript object
    const data = await response.json();
    console.log(data); // Log the returned data for testing
  } catch (error) {
    console.log(error); // Log any network or API errors
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