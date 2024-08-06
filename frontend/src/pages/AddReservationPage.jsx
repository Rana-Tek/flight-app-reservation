import { useState } from "react";
import axios from 'axios';

const AddReservationPage = () => {
    const [formData, setFormData] = useState({
        flight: '',
        passenger_name:'',
        passenger_email:'',
        passenger_phone:'',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/reservations/', formData);
        //form sıralama ve diğer işlemler 
    };
    return(
        <div>
        <h1>Add Reservation</h1>
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="flight"
        placeholder="Flight ID"
        value={formData.flight}
        onChange={handleChange}/>
        <input
        type="text"
        name="passenger_name"
        placeholder="Passenger Name"
        value={formData.passenger_name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="passenger_email"
        placeholder="Passenger Email"
        value={formData.passenger_email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="passenger_phone"
        placeholder="Passenger Phone"
        value={formData.passenger_phone}
        onChange={handleChange}
      />
      <button type="submit">Add Reservation</button>
        
        
        </form>
        
        
        
        </div>
    );
};

export default AddReservationPage;