import { useEffect, useState } from "react";
import { getFlights } from "../api";

const HomePage = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            const data = await getFlights();
            setFlights(data);
        };
        fetchFlights();
    }, []);
    return(
        <div>
        <h1>Flights</h1>
        <ul>
        {flights.map(flight => (
            <li key={flight.id}>
            {flight.flight_number} - {flight.departure} to {flight.destination}
            </li>
        ))}
        </ul>
        </div>
    );
};

export default HomePage;