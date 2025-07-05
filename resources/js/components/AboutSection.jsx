import { useState } from 'react';
import { FaGraduationCap, FaCode, FaHeart, FaBookOpen, FaTools } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import './AboutSection.css';

const AboutSection = ({ aboutData }) => {
    const [activeTab, setActiveTab] = useState('education');

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">ABOUT ME</h2>

            {/* BAGIAN ATAS: Perkenalan (Foto & Deskripsi) */}
            <div className="about-intro-container">
                <div className="about-image">
                    <img src={aboutData.image_path} alt="Profile" />
                </div>
                <div className="about-bio">
                    <h3>{aboutData.greeting}</h3>
                    {aboutData.paragraphs.map((paragraph, index) => (
                        <div key={index} className="about-description">
                            <ReactMarkdown>{paragraph}</ReactMarkdown>
                        </div>
                    ))}
                    <div className="button-group">
                        <a href={aboutData.cv_path} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            DOWNLOAD CV
                        </a>
                    </div>
                </div>
            </div>

            <div className="about-interactive-area">
                <div className="stats-container">
                    {aboutData.stats.map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="tabs">
                    <button className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
                        <FaGraduationCap /> Education
                    </button>
                    <button className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
                        <FaCode /> Skills
                    </button>
                    {/* TOMBOL BARU */}
                    <button className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')}>
                        <FaTools /> Tools
                    </button>
                    <button className={`tab-button ${activeTab === 'interests' ? 'active' : ''}`} onClick={() => setActiveTab('interests')}>
                        <FaHeart /> Interests
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'education' && (
                        <div className="content-pane">
                            {/* Loop melalui setiap item di array education */}
                            {aboutData.education.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <h4>
                                        <FaBookOpen /> {edu.institution}
                                    </h4>
                                    <p>
                                        {edu.major} ({edu.period})
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="content-pane">
                            {/* Container utama untuk semua kategori skill */}
                            <div className="skill-categories-container">
                                {aboutData.skills.map((category, index) => (
                                    <div className="skill-category" key={index}>
                                        <h3>{category.category}</h3>
                                        <div className="skill-cards-container">
                                            {category.technologies.map((tech) => (
                                                <div className="skill-card" key={tech}>
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'tools' && (
                        <div className="content-pane">
                            <ul className="tools-list">
                                {aboutData.tools.map((tool) => (
                                    <li key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'interests' && (
                        <div className="content-pane">
                            <ul className="interests-list">
                                {aboutData.interests.map((interest) => (
                                    <li key={interest}>{interest}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
