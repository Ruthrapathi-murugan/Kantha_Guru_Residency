import { Wifi, Wind, Shirt, Clock, Car, HeartPulse, ShieldCheck, Droplet, Sparkles, Utensils } from 'lucide-react';
import './Amenities.css';

const Amenities = () => {
    const categories = [
        {
            title: "Basic Facilities",
            icon: <Clock size={24} color="hsl(222, 47%, 11%)" />,
            items: [
                { icon: <Wifi size={18} />, text: "Free Wi-Fi" },
                { icon: <Wind size={18} />, text: "Air Conditioning (Room Controlled)" },
                { icon: <Clock size={18} />, text: "24-hour Room Service" },
                { icon: <Shirt size={18} />, text: "Laundry Service (Paid)" },
                { icon: <Utensils size={18} />, text: "24-hour Reception" }
            ]
        },
        {
            title: "Parking",
            icon: <Car size={24} color="hsl(222, 47%, 11%)" />,
            items: [
                { icon: <Car size={18} />, text: "Free Onsite Parking" },
                { icon: <Car size={18} />, text: "Secure Parking for 4 Cars" }
            ]
        },
        {
            title: "Room Amenities",
            icon: <Sparkles size={24} color="hsl(222, 47%, 11%)" />,
            items: [
                { icon: <Droplet size={18} />, text: "Mineral Water" },
                { icon: <Sparkles size={18} />, text: "Premium Toiletries" },
                { icon: <Wind size={18} />, text: "Daily Housekeeping" }
            ]
        },
        {
            title: "Safety & Wellness",
            icon: <ShieldCheck size={24} color="hsl(222, 47%, 11%)" />,
            items: [
                { icon: <ShieldCheck size={18} />, text: "CCTV Surveillance" },
                { icon: <HeartPulse size={18} />, text: "First-aid Services" },
                { icon: <ShieldCheck size={18} />, text: "24/7 Security" }
            ]
        }
    ];

    return (
        <section id="amenities" className="amenities-section section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Comfort & Convenience</span>
                    <h2 className="title">Hotel Amenities</h2>
                </div>

                <div className="amenities-container">
                    {categories.map((category, idx) => (
                        <div key={idx} className="amenity-category">
                            <div className="category-header">
                                {category.icon}
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="amenity-list">
                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="amenity-item">
                                        <span className="amenity-icon">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
