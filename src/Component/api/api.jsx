import axios from 'axios';
//this code fetches film data from an external API using Axios.
// If the fetching process encounters an error, it logs the error to the console and returns an empty array as a default value.
// Otherwise, it returns the fetched film data.
export const fetchGhibliFilms = async () => {
    try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
export const fetchGhibliPeople = async () => {
    try {
        const response = await axios.get('https://ghibliapi.vercel.app/people');
        return response.data;
    } catch (error) {
        console.error('Error fetching people data:', error);
        return [];
    }
};

export const fetchGhiblilocation = async () => {
    try {
        const response = await axios.get('https://ghibliapi.vercel.app/locations/');
        return response.data;
    } catch (error) {
        console.error('Error fetching people data:', error);
        return [];
    }
};