export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '87381c2101mshf466d61919bd9a0p1b08d0jsnfff108434393',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const handleCityApi = async (inputValue) => {

    const input = !!inputValue ? inputValue : 'Cần Thơ'


    try {
        const response = await fetch(`${GEO_API_URL}/cities?countryIds=VN&minPopulation=10000&namePrefix=${input}`, geoApiOptions);
        const result = await response.json();
        return {
            options: result.data.map((city) => {
                return {
                    values: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                }
            })
        }
    } catch (error) {
        console.error(error);
    }
}


