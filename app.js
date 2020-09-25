// These are global variables that I use in my get function code block

const baseUrl = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/`
const stationName = ''
const afterUrl = `/?period=latestdata`



const input = document.querySelector("input")
const form = document.querySelector("form")

// This block of code is for my submit button that grabs the user input and then clears the input field once its submitted.

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let stationName = input.value
  input.value = ''
  removeEle()
  getCity(stationName)
})

// This gets the city from the url givin by the API so it can render that data from the API to the user.

async function getCity(city) {
  try {
    const response = await axios(`${baseUrl}${city}${afterUrl}`)
    let weatherResponse = response.data
    renderData(weatherResponse)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// This function is grabbing elements from the API and appending them to the DOM.

function renderData(weatherResponse) {

  let tempEle = document.createElement('p')
  // Got the code for the Degree symbol from http://gdichicago.com/courses/gdi-featured-js-intro/homework.html#:~:text=Unicode%20Characters%3A%20To%20print%20the,celsius%20temperature%20into%20a%20variable.
  tempEle.textContent = `${weatherConversion(weatherResponse.TEMPERATURE)} \u00B0 F`
  document.querySelector('h2').append(tempEle)
  
  let condEle = document.createElement('h3')
  condEle.textContent = `Outside weather is ${weatherResponse.WEATHER_DES}.`
  document.querySelector('h2').append(condEle)
}

// This function is clearing out the appended elements from the DOM for when the user does another search. 

function removeEle() {
  const weatherContainer = document.querySelector('h2')
  while (weatherContainer.lastChild) {
    weatherContainer.removeChild(weatherContainer.lastChild)
  }
}


// This code block converts my API which is in celsius to fahrenheit
 
function weatherConversion(data) {
  return Math.round((data * 1.8) + 32)
}
