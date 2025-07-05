import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = ({ contactData }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, message: '', success: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, message: '', success: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(formData),
            });

            // Selalu coba baca respons sebagai JSON
            const result = await response.json();

            // Jika respons tidak OK (misal: error 422 atau 500)
            if (!response.ok) {
                let errorMsg = 'An unexpected error occurred. Please try again later.';
                // Cek jika ada error validasi spesifik
                if (result && result.errors) {
                    errorMsg = Object.values(result.errors).join('\n');
                }
                // Cek jika ada pesan error umum
                else if (result && result.message) {
                    errorMsg = result.message;
                }
                // Lemparkan error agar ditangkap oleh blok catch
                throw new Error(errorMsg);
            }

            // Jika berhasil
            setStatus({ submitting: false, message: result.message, success: true });
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            // Tangkap semua jenis error (termasuk error jaringan atau error dari throw di atas)
            setStatus({ submitting: false, message: error.message, success: false });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="section-title">{contactData.title}</h2>
                    <p className="contact-description">{contactData.description}</p>
                    <div className="info-item">
                        <FaRegClock className="info-icon" />
                        <div>
                            <h4>Availability</h4>
                            <p>{contactData.availability}</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <div>
                            <h4>Location</h4>
                            <p>{contactData.location}</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <div>
                            <h4>Email</h4>
                            <p>
                                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h3>Contact form</h3>
                        <div className="form-group">
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn-submit" disabled={status.submitting}>
                            {status.submitting ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>
                    </form>
                    {status.message && <p className={`status-message ${status.success ? 'success' : 'error'}`}>{status.message}</p>}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
