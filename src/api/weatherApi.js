// export const weatherApiOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '87381c2101mshf466d61919bd9a0p1b08d0jsnfff108434393',
//         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//     }
// };



export const handleWeatherApi = async (lat, lon) => {

    console.log('CALL API: ', lat, lon)
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a28dcf28ff0ad1c4fd312906a7e62f0b`;


    try {
        const response = await fetch(WEATHER_API_URL);
        const result = await response.json();
        return {
            weatherData: result
        }
    } catch (error) {
        console.error(error);
    }
}