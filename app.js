const baseUrl = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/`
const stationName = ''
const afterUrl = `/?period=latestdata`



const input = document.querySelector("input")
const form = document.querySelector("form")


form.addEventListener('submit', (e) => {
  e.preventDefault()
  let stationName = input.value
  input.value = ''
  removeEle()
  getCity(stationName)
})


async function getCity(city) {
  try {
    const response = await axios(`${baseUrl}${city}${afterUrl}`)
    let weatherResponse = response.data
    renderData(weatherResponse)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function renderData(weatherResponse) {

  let tempEle = document.createElement('p')
  // Got the code for the Degree symbol from http://gdichicago.com/courses/gdi-featured-js-intro/homework.html#:~:text=Unicode%20Characters%3A%20To%20print%20the,celsius%20temperature%20into%20a%20variable.
  tempEle.textContent = `${weatherConversion(weatherResponse.TEMPERATURE)} \u00B0 F`
  document.querySelector('h2').append(tempEle)
  
  let condEle = document.createElement('h3')
  condEle.textContent = `Outside weather is ${weatherResponse.WEATHER_DES}.`
  document.querySelector('h2').append(condEle)
}

function removeEle() {
  const weatherContainer = document.querySelector('h2')
  while (weatherContainer.lastChild) {
    weatherContainer.removeChild(weatherContainer.lastChild)
  }
}



 
function weatherConversion(data) {
  return Math.round((data * 1.8) + 32)
}
