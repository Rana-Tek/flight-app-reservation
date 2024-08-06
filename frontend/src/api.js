import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getFlights = async () => {
    const response = await axios.get(`${API_URL}/flights/`);
    return response.data;
};

export const getReservations = async () => {
    const response = await axios.get(`${API_URL}/reservations/`);
    return response.data;
};
