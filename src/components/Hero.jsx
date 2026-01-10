import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-subtitle">Welcome to Palani</span>
                <h1 className="hero-title">Kandha Guru Residency</h1>
                <p className="hero-text">
                    Experience a peaceful stay near the Palani Murugan Temple.
                    Clean rooms, 24/7 service, and affordable luxury.
                </p>
                <button className="btn btn-primary">View Rooms</button>
            </div>
        </section>
    );
};

export default Hero;
