import { useState } from 'react';
import './Gallery.css';

// Import images
import imgExterior from '../assets/hotel-exterior.jpg';
import imgReception from '../assets/hotel-reception.jpg';
import imgReceptionAlt from '../assets/gallery-reception-alt.jpg';
import imgCorridor from '../assets/gallery-corridor.jpg';
import imgParking from '../assets/gallery-parking.jpg';
import imgStaircase from '../assets/gallery-entrance.jpg'; // Using entrance as staircase/general if needed, or just entrance
import imgBedroom1 from '../assets/gallery-bedroom-1.jpg';
import imgBedroom2 from '../assets/gallery-bedroom-2.jpg';
import imgBedroom3 from '../assets/hotel-bedroom.jpg'; // The one we had
import imgBathroom1 from '../assets/gallery-bathroom-1.jpg';
import imgBathroom2 from '../assets/gallery-bathroom-2.jpg';


const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const images = [
        { id: 1, src: imgExterior, category: 'Exterior', alt: 'Hotel Exterior' },
        { id: 2, src: imgReception, category: 'Interior', alt: 'Reception Desk' },
        { id: 3, src: imgReceptionAlt, category: 'Interior', alt: 'Reception Area' },
        { id: 4, src: imgCorridor, category: 'Interior', alt: 'Hotel Corridor' },
        { id: 5, src: imgBedroom1, category: 'Rooms', alt: 'Standard Room' },
        { id: 6, src: imgBedroom2, category: 'Rooms', alt: 'Family Suite Bedroom' },
        { id: 7, src: imgBedroom3, category: 'Rooms', alt: 'Double Bedroom' },
        { id: 8, src: imgBathroom1, category: 'Rooms', alt: 'Modern Bathroom' },
        { id: 9, src: imgBathroom2, category: 'Rooms', alt: 'Washroom Facilities' },
        { id: 10, src: imgParking, category: 'Exterior', alt: 'Spacious Parking' },
        { id: 11, src: imgStaircase, category: 'Exterior', alt: 'Entrance View' },
    ];

    const categories = ['All', 'Rooms', 'Interior', 'Exterior'];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <h1>Photo Gallery</h1>
                <p>Explore Kandhaguru Residency</p>
            </div>

            <div className="gallery-filter">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredImages.map(img => (
                    <div key={img.id} className="gallery-item">
                        <img src={img.src} alt={img.alt} loading="lazy" />
                        <div className="overlay">
                            <span>{img.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
