{/* 
    Filename: Contact.jsx
    Student Name: Zac Selby
    StudentID: 301464729
    Date: 2025-05-20
*/}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http:localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        } catch (err) {
            alert('Error sending message: ' + err.message);
        }
    }

    return (
        <>
            <h1>Contact Me</h1>
            <div id="smalldiv">
                <p>
                    I’m always open to connecting — whether you're interested in collaborating on a project, discussing AI and accessibility, or just want to chat about tech and ideas.
                </p>
                <p>
                    You can reach me through any of the methods below:
                </p>

                <ul id="contactlist">
                    <li>
                        <a href="mailto:zselby@my.centennialcollege.ca">zselby@my.centennialcollege.ca</a>
                    </li>
                    <li>
                        <a href="https://github.com/Zac-Selby">Github</a>
                    </li>
                </ul>
            </div>
            <br /><br />

            <form id="contactForm" onSubmit={handleSubmit}>
                <h1>Contact Form</h1>
                <br />
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <br /><br />

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <br /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <br /><br />

                <label htmlFor="phone">Phone: </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                <br /><br />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />
                <br /><br />

                <button type="submit">Send</button>
            </form>
        </>
    )
}