const baseUrl = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/`
const stationName = ''
const afterUrl = `/?period=latestdata`



const input = document.querySelector("input")
const form = document.querySelector("form")


form.addEventListener('submit', async (e) => {
  e.preventDefault()
  let stationName = input.value
  console.log(stationName)
  getCity(stationName)
  // const response = await axios(`${baseUrl}${stationName}${afterUrl}`)
  // console.log("Data 13", response.data);
  // renderList(response.data.TEMPERATURE)
})


async function getCity(city) {
  try {
    const response = await axios(`${baseUrl}${city}${afterUrl}`)
    console.log(response.data)
    let weatherResponse = response.data
    // console.log(weatherResponse.TEMPERATURE)
    renderData(weatherResponse)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function renderData(weatherResponse) {
  let tempEle = document.createElement('p')
  tempEle.textContent = weatherConversion(weatherResponse.TEMPERATURE)
  document.querySelector('h2').append(tempEle)
  
  let condEle = document.createElement('p')
  condEle.textContent = weatherResponse(weatherResponse.WEATHER_DES)
  document.querySelector('h2').append(condEle)
}

// function renderData(weatherResponse) {
//   let condEle = document.createElement('p')
//   condEle.textContent = (response.data.WEATHER_DES)
//   document.querySelector('h2').append(condEle)
// }


 
function weatherConversion(data) {
  return Math.round((data * 1.8) + 32)
}
// let seattle = weatherConversion(25.3)
// console.log('Seattle:', Math.round(seattle))