
const baseUrl = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/`
const stationName = ''
const afterUrl = `/?period=latestdata`


const input = document.querySelector("#blank")
const button = document.querySelector("#submit")

button.addEventListener('click', async () => {
  let stationName = input.value
  const response = await axios(`${baseUrl}${stationName}${afterUrl}`)
  console.log(response.data);
  // renderList(response.data.TEMPERATURE)
})

// const weatherDisplay = document.querySelector(".weather-data")


// const renderList = weather => {
//   weather(data => {
//     const dataContainer = document.createElement('div')
//     dataContainer.className = "weather-container"

//     let temp = document.createElement('h4')
//     temp.innerHTML = `${data.TEMPERATURE}`
//     weatherContainer.appendChild(temp)

//     let display = document.createElement('p')
//     display.innerHTML = `${data.WEATHER_DES}`
//     weatherContainer.appendChild(display)

//   })
//   weatherDisplay.appendChild(weatherContainer)
// }

async function getWeather(stationName, period) {
  const url = `https://api.oceandrivers.com:443/v1.0/getSocibWeatherStation/v1.0/getSocibWeatherStation/${stationName}/${period}/`
  try {
    const response = await axios(url)
    // console.log(response.data.TEMPERATURE);
    const temp = response.data.TEMPERATURE
    weatherTemp(temp)
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function weatherTemp(temp) {
  const text = document.createElement('h4')
  
}