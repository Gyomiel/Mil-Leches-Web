import React, {useState} from 'react';
import { getAllBokings } from '../../services/bookings';
import { useEffect } from 'react';

const ReservationList = () =>{
    const [allreservations, setallReservations] = useState([]);

   const fecha = "27-07-2024"

const handlebookings = async () => {
    const data = await getAllBokings ()
    setallReservations(data)
    console.log(data)
}

useEffect(() => {handlebookings()}, [] )



   return (
    <div>{allreservations.map((item) => {return item.checkIn})}</div>

   )
}
export default ReservationList