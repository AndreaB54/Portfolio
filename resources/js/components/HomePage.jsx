import { useEffect, useState } from 'react';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import './HomePage.css';
import ProjectsSection from './ProjectsSection';

// Icon Footer
import { FaBars, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const HomePage = () => {
    const [homeData, setHomeData] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    // Khusus buat navbar mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        fetch('/api/home-data')
            .then((response) => response.json())
            .then((apiData) => {
                console.log('Data yang diterima dari API:', apiData);
                setHomeData(apiData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (!homeData) {
        return <div className="loading-screen">Loading...</div>;
    }

    const socialLinksFooter = [
        { href: homeData.socials.linkedin, icon: <FaLinkedin />, label: 'LinkedIn' },
        { href: homeData.socials.instagram, icon: <FaInstagram />, label: 'Instagram' },
        { href: homeData.socials.mail, icon: <FaEnvelope />, label: 'Email' },
        { href: homeData.socials.github, icon: <FaGithub />, label: 'GitHub' },
    ];

    return (
        <div className="homepage">
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logo">ANDREA BAIKOLE</div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            <header id="home" className="hero-section">
                <div className="hero-text">
                    <h1>
                        HEY THERE! <br /> I'M {`${homeData.name.split(' ')[0].toUpperCase()}`}
                    </h1>
                    <h1 className="highlight">{homeData.title}</h1>
                    <p className="description">{homeData.description}</p>
                    <div className="cta-buttons">
                        <a href={homeData.socials.mail} className="get-in-touch-btn">
                            GET IN TOUCH →
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/foto.jpg" alt={homeData.name} />
                </div>
            </header>

            {homeData.about && <AboutSection aboutData={homeData.about} />}
            {homeData.projects && <ProjectsSection projectsData={homeData.projects} />}
            {homeData.contact && <ContactSection contactData={homeData.contact} />}

            <footer className="footer-section">
                <div className="footer-container">
                    <h3 className="footer-title">Find Me On</h3>
                    <div className="footer-socials">
                        {socialLinksFooter.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <div className="footer-copyright">© {new Date().getFullYear()} Andrea Baikole. All Rights Reserved.</div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
