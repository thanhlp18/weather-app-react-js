const [min, max] = [0, 1500]

const randomQuoteApi = async () => {

    const QUOTE_API_URL = `https://type.fit/api/quotes`;


    try {
        const response = await fetch(QUOTE_API_URL);
        const result = await response.json();
        return {
            quote: {
                text: result[Math.floor(Math.random() * (max - min + 1)) + min].text,
                author: result[Math.floor(Math.random() * (max - min + 1)) + min].author
            }
        }
    } catch (error) {
        console.error(error);
    }
}

export default randomQuoteApi