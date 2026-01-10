import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        KANDHA GURU RESIDENCY
                    </div>

                    <div className="footer-links">
                        <a href="#rooms">Rooms</a>
                        <a href="#amenities">Amenities</a>
                        <a href="#contact">Contact</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <span>&copy; {currentYear} Kandha Guru Residency. All rights reserved.</span>
                        <span>
                            Created by <a href="https://ruthradigitalsolutions.netlify.app/" target="_blank" rel="noopener noreferrer" className="developer-link">Ruthra Digital Solutions</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
