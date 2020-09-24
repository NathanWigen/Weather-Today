const baseUrl = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/`
const stationName = ''
const afterUrl = `/?period=latestdata`



const input = document.querySelector("input")
const form = document.querySelector("form")


form.addEventListener('submit', async (e) => {
  e.preventDefault()
  let stationName = input.value
  // console.log(stationName)
  getCity(stationName)
  // const response = await axios(`${baseUrl}${stationName}${afterUrl}`)
  // console.log("Data 13", response.data);
  // renderList(response.data.TEMPERATURE)
})


async function getCity(city) {
  try {
    const response = await axios(`${baseUrl}${city}${afterUrl}`)
    // console.log(response.data)
    let weatherResponse = response.data
    // console.log(weatherResponse.TEMPERATURE)
    renderData(weatherResponse)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function renderData(weatherResponse) {
  const weatherContainer = document.createElement('div')
  weatherContainer.className = "weather-container"

  let tempEle = document.createElement('p')
  // Got the code for the Degree symbol from http://gdichicago.com/courses/gdi-featured-js-intro/homework.html#:~:text=Unicode%20Characters%3A%20To%20print%20the,celsius%20temperature%20into%20a%20variable.
  tempEle.textContent = `${weatherConversion(weatherResponse.TEMPERATURE)} \u00B0 F`
  document.querySelector('h2').append(tempEle)
  
  let condEle = document.createElement('h3')
  condEle.textContent = `Outside weather is ${weatherResponse.WEATHER_DES}.`
  document.querySelector('h2').append(condEle)

  
}



 
function weatherConversion(data) {
  return Math.round((data * 1.8) + 32)
}
// let seattle = weatherConversion(25.3)
// console.log('Seattle:', Math.round(seattle))