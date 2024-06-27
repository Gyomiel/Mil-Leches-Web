import React, { useEffect, useState } from 'react'
import ReservationList from '../reservelist/reservelist'
import "./PastBoking.css"
import { getAllBokings } from '../../services/bookings';

function PastBoking() {
  const [allReservations, setAllReservations] = useState([]);
  const [pastReservations, setPastReservations] = useState([]);

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
      const pastReservs = formattedData.filter(reservation => {
        console.log(data[0].checkOut)
        console.log(new Date (reservation.checkOut))
        const date = new Date(data[0].checkOut)
        const now = new Date
        return date < now
        })
      console.log(pastReservs);
      setPastReservations(pastReservs)
  };

  useEffect(() => {
      handleBookings();
  }, []);
  return (
    pastReservations.length > 0 &&
    <div className="pastBookings">
              <button className="pastBooking1">
              <ReservationList reservations={pastReservations}/>
              </button>
    </div>
  )
}

export default PastBoking