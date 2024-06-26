import React, { useEffect, useState } from 'react'
import ReservationList from '../reservelist/reservelist'
import "./FutureBoking.css"
import { getAllBokings } from '../../services/bookings';

function FutureBoking() {
  const [allReservations, setAllReservations] = useState([]);
  const [futureReservations, setFutureReservations] = useState([]);

  const formatToDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
  };

  const handleBookings = async () => {
      const data = await getAllBokings ();
      const formattedData = data.map((item) => ({
          ...item,
          checkIn: formatToDate(item.checkIn),
          checkOut: formatToDate(item.checkOut)
      }));
      setAllReservations(formattedData);
      const futureReservs = formattedData.filter(reservation => {
        console.log(data[0].checkOut)
        console.log(new Date (reservation.checkOut))
        const date = new Date(data[0].checkOut)
        const now = new Date
        return date > now
        })
      console.log(futureReservs);
      setFutureReservations(futureReservs)
  };

  useEffect(() => {
      handleBookings();
  }, []);
  return (
    futureReservations.length > 0 &&
    <div className="futureBookings">
    <h2 className="myFutureB">My future bookings</h2>
        <button className="futureBooking1">
            <ReservationList reservations={futureReservations}/>
        </button>
    <img className="plus1" src={iconPlus}></img>
    </div>
  )
}

export default FutureBoking