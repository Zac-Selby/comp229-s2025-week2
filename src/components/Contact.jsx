{/* 
    Filename: Contact.jsx
    Student Name: Zac Selby
    StudentID: 301464729
    Date: 2025-05-20
*/}
export default function Contact() {
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

            <form id="contactForm">
                <h1>Contact Form</h1>
                <br />
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
                <br /><br />

                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" />
                <br /><br />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br /><br />

                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" />
                <br /><br />

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <br /><br />

                <button type="submit">Send</button>
            </form>
        </>
    )
}