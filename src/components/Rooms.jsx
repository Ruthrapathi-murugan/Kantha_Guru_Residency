import { useState } from 'react';
import { Wifi, Snowflake, Wind } from 'lucide-react';
import roomStandardImg from '../assets/hotel-bedroom.jpg';
import roomSuiteImg from '../assets/hotel-bedroom.jpg'; // Using same image for now, can substitute if user provides more
import './Rooms.css';

const Rooms = () => {
    const rooms = [
        {
            id: 1,
            name: 'Standard Room',
            image: roomStandardImg,
            description: 'Comfortable double bed with essential amenities. Perfect for pilgrims and short stays.',
            price: 1700,
            features: ['Double Bed', 'TV', 'Room Service']
        },
        {
            id: 2,
            name: 'Family Suite',
            image: roomSuiteImg,
            description: 'Spacious suite for families. Includes extra bedding and seating area.',
            price: 2500,
            features: ['2 Queen Beds', 'AC', 'Hill View']
        }
    ];

    return (
        <section id="rooms" className="rooms-section section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Accommodations</span>
                    <h2 className="title">Select Your Sanctuary</h2>
                </div>

                <div className="rooms-grid">
                    {rooms.map(room => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const RoomCard = ({ room }) => {
    const [isAC, setIsAC] = useState(false);

    return (
        <div className="room-card">
            <div className="room-image-wrapper">
                <img src={room.image} alt={room.name} className="room-image" />
                <div className="price-tag">
                    ₹{isAC ? room.price + 500 : room.price} <span>/ night</span>
                </div>
            </div>
            <div className="room-content">
                <h3 className="room-title">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                <div className="room-features">
                    {room.features.map((feature, idx) => (
                        <span key={idx} className="feature-pill">{feature}</span>
                    ))}
                </div>

                <div className="room-options">
                    <div className="option-toggle" onClick={() => setIsAC(!isAC)}>
                        {isAC ? <Snowflake size={18} color="hsl(222, 47%, 11%)" /> : <Wind size={18} color="hsl(222, 47%, 11%)" />}
                        <span>{isAC ? 'Air Conditioned' : 'Non-AC'}</span>
                        <span className="toggle-status">{isAC ? 'ON' : 'OFF'}</span>
                    </div>
                </div>

             <button
  className="btn btn-primary full-width"
  onClick={() =>
    window.open(
      "https://www.booking.com/Share-kFW243",
      "_blank"
    )
  }
>
  Book This Suite
</button>

            </div>
        </div>
    );
};

export default Rooms;
