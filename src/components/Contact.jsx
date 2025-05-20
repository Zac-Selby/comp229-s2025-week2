{/* 
    Filename: Contact.jsx
    Student Name: Zac Selby
    StudentID: 301464729
    Date: 2025-05-20
*/}
import { useNavigate } from "react-router-dom";

export default function Contact() {
    // use javascript to navigate to the home page after form submission
    // might need to put this in a javascript file

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/");
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
                <input type="text" id="firstName" name="firstName" required />
                <br /><br />

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" required />
                <br /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />
                <br /><br />

                <label htmlFor="phone">Phone: </label>
                <input type="tel" id="phone" name="phone" required />
                <br /><br />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" rows="4" required />
                <br /><br />

                <button type="submit">Send</button>
            </form>
        </>
    )
}