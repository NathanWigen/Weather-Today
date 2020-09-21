// const DOMAIN = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/${stationName}/?period=latestdata`


const baseUrl = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/`
const stationName = ''
const afterUrl = `/?period=latestdata`

// const DOMAIN = `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/`
// const userLocation = `${stationName}`
// const domainAfter = `/?period=latestdata`

const input = document.querySelector("#blank")
const button = document.querySelector("#submit")

button.addEventListener('click', async () => {
  let stationName = input.value
  const response = await axios(`${baseUrl}${stationName}${afterUrl}`)
  console.log(response.data.TEMPERATURE);
  // renderList(response.data.TEMPERATURE)
})