import axios from 'axios';

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