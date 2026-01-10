import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="contact-title">Contact Us</h2>

                        <div className="info-item">
                            <MapPin size={24} color="hsl(45, 29%, 49%)" />
                            <div className="info-content">
                                <h4>Our Location</h4>
                                <p>
                                    18 Idumban Kovil Itteri Rd,<br />
                                    South Anna Nagar, Palani,<br />
                                    Tamil Nadu 624601
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone size={24} color="hsl(45, 29%, 49%)" />
                            <div className="info-content">
                                <h4>Phone</h4>
                                <p>+91 63803 28737</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock size={24} color="hsl(45, 29%, 49%)" />
                            <div className="info-content">
                                <h4>Check-in / Check-out</h4>
                                <p>Check-in: 12:00 PM</p>
                                <p>Check-out: 11:00 AM</p>
                                <p>24-Hour Front Desk</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.742779124521!2d77.52060157451338!3d10.441974465274793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df965dc5d4d5%3A0x762fe34f57ddbf9c!2sKandhaguru%20Residency!5e0!3m2!1sen!2sin!4v1768068562309!5m2!1sen!2sin"
                            className="map-frame"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
