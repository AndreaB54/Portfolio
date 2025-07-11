import { useState } from 'react';
import { FaBookOpen, FaBriefcase, FaCode, FaGraduationCap, FaHeart, FaTools, FaUsers } from 'react-icons/fa';
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
                    <button className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>
                        <FaBriefcase /> Experience
                    </button>
                    <button className={`tab-button ${activeTab === 'organizations' ? 'active' : ''}`} onClick={() => setActiveTab('organizations')}>
                        <FaUsers /> Organizations
                    </button>
                    <button className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
                        <FaCode /> Skills
                    </button>
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

                    {activeTab === 'experience' && (
                        <div className="content-pane">
                            {/* Kontainer utama untuk roadmap/timeline */}
                            <div className="experience-timeline">
                                {aboutData.experiences.map((exp, index) => (
                                    // Setiap item pengalaman
                                    <div className={`timeline-item ${index % 2 === 0 ? 'item-left' : 'item-right'}`} key={index}>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-card">
                                            <div className="timeline-card-header">
                                                <span className="timeline-period">{exp.period}</span>
                                                <h5 className="timeline-role">{exp.role}</h5>
                                            </div>
                                            <p className="timeline-company">{exp.company}</p>
                                            <p className="timeline-description">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'organizations' && (
                        <div className="content-pane">
                            {/* Menggunakan className "experience-timeline" yang SAMA dengan Experience */}
                            <div className="experience-timeline">
                                {aboutData.organizations &&
                                    aboutData.organizations.map((org, index) => (
                                        // Strukturnya sama persis, hanya sumber datanya yang beda
                                        <div className={`timeline-item ${index % 2 === 0 ? 'item-left' : 'item-right'}`} key={index}>
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-card">
                                                <span className="timeline-period">{org.period}</span>
                                                <h5 className="timeline-role">{org.role}</h5>
                                                <p className="timeline-company">{org.organization}</p>
                                                <p className="timeline-description">{org.description}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
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
