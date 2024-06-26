
import "./reservelist.css"

const ReservationList = ({reservations}) => {
   
console.log(reservations)

    return (
        <div>
            {reservations?.map((item, index) => (
                <div key={index}>
                    <p className='DateIn'> {item.checkIn.replace(/-/g, '/')} - {item.checkOut.replace(/-/g, '/')}</p>
                </div>
            ))}
        </div>
    );
};

export default ReservationList;